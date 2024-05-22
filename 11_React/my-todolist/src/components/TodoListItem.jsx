import { styled } from "styled-components";

const ItemStyle = styled.div`
width : 300px;
height : 50px;
border : 1px solid black;
// 스타일요망
`
function TodolistItem(props) {
  const { item } = props;
  return (
    <ItemStyle>
      {item}
    </ItemStyle>
  );
};

export default TodolistItem; 