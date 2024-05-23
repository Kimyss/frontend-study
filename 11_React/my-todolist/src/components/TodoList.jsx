
import TodoListItem from "./TodoListItem";
import { styled } from "styled-components";

// const Todo = styled.div`
//   // display: flex;
//   // justify-content: space-between;
//   margin: 10px;
//   padding: 10px;
//   border-bottom: 1px solid black;
// `


function TodoList(props) {
  const { todos } = props;
  return (
    <>
      <TodoListItem />
      {/* {todos.map((todo) => {
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      })} */}
    </>
  );
};

export default TodoList;
