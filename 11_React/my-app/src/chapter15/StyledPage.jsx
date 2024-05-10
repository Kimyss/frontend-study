import styled from "styled-components";      //변수명은 관례 : Styled

// 0. styled-components 패키지 설치하기
// npm install styled-components

// CSS in JS란?
// JS 안에 CSS를 작성하는 것

// styled-components란?
// CSS문법을 그대로 사용하면서 결과물로 스타일링된 컴포넌트를 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성요소의 스타일을 지정

// 다양한 문법은 공식문서 참고
// https://styled-components.com/docs

// 1. 기본적인 사용법   z컴포넌트 대문자로 시작하세요
const Wrapper = styled.div` 
  padding: 1rem;
  background: gray;
`;

// vscode-styled-components 익스텐션 설치하기 설치하면 기존 css UI처럼 나와요

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`

// 2.props 사용하기
// 컴포넌트 형태라 props 사용이 가능 (최고 장점 중 하나)
// 참고 - || 뒤는 기본값이에요 
const Button = styled.button`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '40px'};;
  background: ${props => props.$dark ? 'black' : 'white'};
  color: ${props => props.$dark ? 'white' : 'black'};
  border: 2px solid black;
  cursor: pointer;

  /* 3. & 기호 (parent selector)를 사용하여 바깥쪽 선택자 참조 가능(like Sass) */
  /* 여기서는 Button 자기 자신을 참조 */
  &:hover {
    background: #b3b3b3;
  }
  `;


function StyledPage() {
  return (
    <Wrapper>
      <Title>안녕, 리액트</Title>

      <Button width = "200px" height = "60px">Nomal</Button>

      {/* 버튼안 dark만 써도되요 (속성 값 키값 같으면) */}
      {/* $는 스타일 지정만을 위한 prop이 DOM요소로 렌더링 되는 것을 방지하기위해
       붙여 임시 prop으로 전환 할 수 있다. */}
      <Button $dark ={true}>Dark</Button>     
    </Wrapper>
    
  );
};

export default StyledPage;