import { styled } from "styled-components";
import Button from "./Button";
import TodoInsert from "./TodoInsert";
import { useState } from "react";

const TodoWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;
  /* background: skyblue; */

  .app-title{
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .button{
    /* 버튼css요망 */
    border-radius: 10px;
  }
`

function TodoTemplate() {
  const [addtodo, setAddtodo] = useState('');

  return (
   <TodoWrapper>
      <div className="app-title">일정관리</div>
      <TodoInsert />
    </TodoWrapper>
  );
};

export default TodoTemplate;