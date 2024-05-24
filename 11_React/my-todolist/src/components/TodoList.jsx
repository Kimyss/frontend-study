
import TodoListItem from "./TodoListItem";
import { styled } from "styled-components";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;  
  overflow-y: auto;   
`

function TodoList(props) {
  const { todos, onRemove } = props;
  return (
    <TodoListWrapper>
      {todos.map((todo)=>{
        return <TodoListItem key = {todo.id} todo = {todo} onRemove = {onRemove}  />;
      })}
      
    </TodoListWrapper>
  );
};

export default TodoList;
