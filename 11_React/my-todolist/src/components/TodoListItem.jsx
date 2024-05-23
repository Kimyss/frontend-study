import { styled } from "styled-components";
import { css } from "styled-components";

const ItemStyle = styled.div`
// display: flex;
// justify-content: space-between;
margin: 10px;
padding: 10px;
border-bottom: 1px solid black;
`
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;  // 차지할 수있는 영역 모두차지

  
  ${props => props.done &&
    css`
    color: #adb5bd;
    text-decoration: line-through;
  `
  }
`;

function TodolistItem(props) {
  const { todo } = props;
  return (
    <ItemStyle >

    </ItemStyle>
  );
};

export default TodolistItem; 