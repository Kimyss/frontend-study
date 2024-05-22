import { styled } from "styled-components";
import TodoInsert from "./TodoInsert";
import { CgAdidas } from "react-icons/cg";
import TodoList from "./TodoList";

const TodoWrapper = styled.div`
width : 512px;
margin: 6rem auto 0;
overflow: hidden;   //넘치는거 숨기기
background: white;
border-radius : 10px;

.app-title{
  font-size : 30px;
  height : rem;
  margin : 10px 10px;
}
`

function TodoTemplate() {

  return (
    <TodoWrapper>
      <div className="app-title">Todo List <CgAdidas /></div>
      <TodoInsert />
      <TodoList />
    </TodoWrapper>
  );
};

export default TodoTemplate;