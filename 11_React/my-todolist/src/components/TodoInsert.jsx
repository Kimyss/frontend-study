import { styled } from "styled-components";
import { PiCursorClickBold as ADDIcon } from "react-icons/pi";
import { useState } from "react";


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


function TodoInsert(props) {
  const { addTodo } = props;

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert('문자입력요망');
      return;
    }
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <>
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

    </>
  );
};


export default TodoInsert;