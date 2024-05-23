import Button from "./Button";
import TodolistItem from "./TodoListItem";
import { styled } from "styled-components";

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid black;
`

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`

function TodoList(props) {
  //  const { todoList } = props;
  return (
    <>
      <Todo>
        <Text>등록목록</Text>
        {props.todoList.map((item) => {
          <TodolistItem item={{ item }} />
        })}
        

        <Button buttonName={'수정'} />
      </Todo>
    </>
  );
};

export default TodoList;
