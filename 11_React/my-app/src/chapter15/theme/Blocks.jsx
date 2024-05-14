import { lazy } from "react";
import styled from "styled-components";

const Wrapper =styled.div`
  display: flex;
  padding: 1rem;
  /* background-color: lightgray; */
  background-color: ${props =>{
      console.log(props);

      return props.theme.grayBg}};
`;

const Block = styled.div`
  padding: ${props => props.$padding};
  /* 패딩값을 props로 받아와서 쓸게요*/

  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.$backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red'
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green'
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue'
  }
]

function Blocks() {
  return (
    <Wrapper>
      {/* Quiz 반복렌더링 및 스타일링 완성 */}
      {blockItems.map((render, index)=>{
        return (
          <Block 
          key={render.label}
          $padding = {render.padding}
          $backgroundColor = {render.backgroundColor}
          >
            {render.label}
          </Block>
        )
      })}
    </Wrapper>
  );
};

export default Blocks;