
import TodoListItem from "./TodoListItem";
import { styled } from "styled-components";
import { MdOutlineEditNote as Note } from "react-icons/md";

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
const ListPending = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    margin: 0 15px 5px;
  }
  svg{
    font-size: 23px;
  }
`

function TodoList(props) {
  const { todos, onRemove, onToggle, onModal1, } = props;

  const pendingTodos = todos.filter((todo) => {
    return !todo.done
  });

  const pendingTodos2 = todos.filter((todo) => {
    return todo.done
  });

  const pendingCount = pendingTodos.length;
  const completeCount2 = pendingTodos2.length;

  return (
    <>
      <TodoListWrapper>
        <ListPending>
          <p>-진행요망-</p>  <p><Note/>{pendingCount}개 </p>
        </ListPending>
        {pendingTodos.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal1={onModal1} />
        })}
      </TodoListWrapper>

      <TodoListWrapper2>
        <ListPending>
          <p>-완료-</p>  <p><Note/>{completeCount2}개 </p>
        </ListPending>
        {pendingTodos2.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal1={onModal1} />
        })}
      </TodoListWrapper2>

    </>

  );
};

export default TodoList;
