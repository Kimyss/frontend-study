import { styled } from "styled-components";

const TodoWrapper = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;
  background: orange;

  .app-title{
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`

function TodoItem() {
  return (
    <>
    <TodoWrapper>
      <div className="app-title">일정관리</div>
    </TodoWrapper>
    </>
  );
};

export default TodoItem;