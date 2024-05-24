import { styled } from "styled-components";
import { css } from "styled-components";


const ItemStyle = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
padding: 10px;
border-bottom: 1px solid black;

button{
  background: none;
  display: flex;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 5px;
}
`
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;

  
  ${props => props.done &&
    css`
    color: #adb5bd;
    text-decoration: line-through;
  `
  }
`;


function TodolistItem(props) {
  const { todo: { id, text, done, }, onRemove } = props;
  return (
    <ItemStyle>
      <Text done = {done}>{text}</Text>
      <button> 수정 </button>
      <button onClick={()=>{
        onRemove(id);
      }}>
      삭제
      </button>
    </ItemStyle>
  );
};

export default TodolistItem; 