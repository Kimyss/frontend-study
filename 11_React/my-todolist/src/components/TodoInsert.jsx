import { styled } from "styled-components";
import { PiCursorClickBold as ADDIcon } from "react-icons/pi";
import { useState } from "react";
import Modal2 from "./Modal2";


const InputInsert = styled.form`
  background: white;
  display: flex;
  margin: 30px 3px;
  border : 1px solid black;
  border-radius : 3px;
`

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  flex: 1;
`

const TodayAnd = styled.div`
  display: flex; 
  justify-content: space-between;
  margin: 0 10px;
  
  button{
    background: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-left: 5px;
    border-radius: 5px;
    height: 25px;
  }
`

const Today = styled.p`
  text-decoration: underline;
`




function TodoInsert(props) {
  const { addTodo, onSorted, sortedTitle } = props;

  const [inputValue, setInputValue] = useState('');
  const [showModal2, setShowModal2] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setShowModal2(true);
      return;
    }

    addTodo(inputValue);
    setInputValue('');
  };

  const handleCloseModal = () => {
    setShowModal2(false);
  };

  const TodayDate = () => {
    const today = new Date();
    const todayToday =
      `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    return <p> Today : {todayToday} </p>
  };


  const handleChange2 = (e) => {
    setInputValue(e.target.value);
  };

  const handlesorted = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSorted(inputValue);
      setInputValue('');
    }
  }

  


  return (
    <>
      <form onSubmit={handlesorted}>
        <TodayAnd>
          <Today>
            <TodayDate />
          </Today>
          <button type="button" value={handleChange2} onClick={onSorted}>{sortedTitle}</button>
        </TodayAnd>
      </form>

      <InputInsert onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="할일 입력창"
          value={inputValue}
          onChange={handleChange}
        >
        </StyledInput>
        <button type="submit">    {/* 버튼에 onSumbmit 넣으면? */}
          <ADDIcon />
        </button>
      </InputInsert>
      {showModal2 ? <Modal2 message="문자입력필요" onClose={handleCloseModal} /> : null}
    </>
  );
};


export default TodoInsert;