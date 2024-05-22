import { styled } from "styled-components";
import Button from "./Button";
import { PiCursorClickBold } from "react-icons/pi";
import { useState } from "react";
import TodoList from "./TodoList";

const InputInsert = styled.form`
  background: white;
  display: flex;
  margin: 30px 3px;
  border : 1px solid black;
  border-radius : 3px
`

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  /* color: white; */
  flex: 1;    // 버튼을 제외한 영역을 모두 파지하기
`;


function TodoInsert() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const [todoList, setTodoList] = useState('');

  const handleTodo = (e) => {
    e.
      setTodoList([...todoList, inputValue]);
    console.log(todoList);
  };

  return (
    <>
      <InputInsert>
        <StyledInput
          type="text"
          placeholder="할일 입력창"
          value={inputValue}
          onChange={handleInput}
        >
        </StyledInput>
        <button type="submit" onChange={handleTodo}>
          <PiCursorClickBold />
        </button>
      </InputInsert>
      <TodoList todoList={todoList} />
    </>
  );
};

export default TodoInsert;