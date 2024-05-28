
import TodoListItem from "./TodoListItem";
import { styled } from "styled-components";

const TodoListWrapper = styled.div`
  min-height: 200px;
  max-height: 513px;  
  overflow-y: auto;   
`

const TodoListWrapper2 = styled.div`
min-height: 200px;
max-height: 513px;  
overflow-y: auto;   
`

function TodoList(props) {
  const { todos, onRemove, onToggle, onModal1 } = props;

  const pendingTodos = todos.filter((todo)=>{
    return !todo.done
  });

  const pendingTodos2 = todos.filter((todo)=>{
    return todo.done
  });
   

  return (
    <>
    <TodoListWrapper>
       -진행요망-
      {pendingTodos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal1={onModal1} />
      })}
    </TodoListWrapper>

    <TodoListWrapper2>
       -완료-
      {pendingTodos2.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal1={onModal1} />
      })}
    </TodoListWrapper2>
    
    </>

  );
};

export default TodoList;
