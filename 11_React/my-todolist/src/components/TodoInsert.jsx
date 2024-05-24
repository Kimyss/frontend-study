import { styled } from "styled-components";
import { PiCursorClickBold as ADDIcon } from "react-icons/pi";
import { useState } from "react";
import TodoList from "./TodoList";

const InputInsert = styled.form`
  background: white;
  display: flex;
  margin: 30px 3px;
  border : 1px solid black;
  border-radius : 3px;
`

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  flex: 1;    // 버튼을 제외한 영역을 모두 파지하기
`


function TodoInsert(props) {
  const { addTodo } = props;

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue){
      alert('문자입력요망')
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
        <button type="submit">    {/* 버튼에 onSumbmit 넣으면 왜? */}
          <ADDIcon />
        </button>
      </InputInsert>

    </>
  );
};


export default TodoInsert;