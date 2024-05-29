import { styled } from "styled-components";
import { CgAdidas } from "react-icons/cg";
import { useNavigate } from "react-router-dom";




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

const RouterBox = styled.div`
  display: flex;
  justify-content: space-between;

  button{
  background: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  height: 25px;
  }
`

function TodoTemplate(props) {
  const { children, google } = props;
  
  return (
    <TodoWrapper>
      <RouterBox>
      <div className="app-title">Todo List <CgAdidas /></div>
      <button onClick = {google}>검색요망(Router)</button>
      </RouterBox>
      
      <div>{children}</div>
    </TodoWrapper>
  );
};

export default TodoTemplate;