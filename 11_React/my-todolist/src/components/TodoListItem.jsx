import { styled } from "styled-components";
import { css } from "styled-components";
import { RiCheckboxBlankLine as BinCheck, RiCheckboxBlankFill as CheckNemo } from "react-icons/ri";

const ItemStyle = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
padding: 10px;
border-bottom: 1px solid black;

button{
  background: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 5px;
  width: 50px;
  height: 25px;
}
`
const Check = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg{
    font-size: 22px;
    color: #1b1919;
    & :hover{
      color: #adb5bd;
    }
  }
`

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;

  
  ${props => props.done &&

    css`
    color: #7c7c7c;
    text-decoration: line-through;

    
  `
  }
`;


const BackDiv = styled.div`
  /* position: fixed;    //뷰포트에 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`



function TodolistItem(props) {
  const { todo: { id, text, done, }, onRemove, onToggle, onModal1 } = props;
  return (
    <>
      <ItemStyle>
        <Check done={done} onClick={() => {
          onToggle(id);
        }}>{done ? <CheckNemo /> : <BinCheck />}
        </Check>
        <Text done={done}>{text} </Text>
        <button type="button" onClick={() => {
          onModal1(id);
        }} > 수정 </button>
        <button type="button" onClick={() => {
          onRemove(id);
        }}>
          삭제
        </button>
      </ItemStyle>
    </>
  );
};

export default TodolistItem; 