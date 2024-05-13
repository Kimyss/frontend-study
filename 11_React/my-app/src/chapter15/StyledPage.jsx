import styled, { css } from "styled-components";      //변수명은 관례 : Styled

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

/*6. 반응형 디자인
    -일반 CSS 사용할 때와 똑같이 미디어쿼리 사용가능
    -library 가져다 사용. 리액트답게 react-responsive 라이브러리 사용
 */

 /* 기본적으로 가로 길이를 1024px에 가운데 정렬하고 
    가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채우기 */
    width: 1024px;
    margin: 0 auto;
    @media screen and (max-width: 1024px){
      width: 768px;
    }

    @media screen and (max-width: 768px){
      width: 100%;
    }
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

  /* 버튼 사이 간격 띄우기 */
  /* 버튼컴포넌트 자기 자신 옆에 바로 또 자신컴포넌트가 나온다면 */
  & + &{
    margin-left: 1rem;
  }

  // 4. 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우 css를 불러와 사용
  ${props => props.$inverted &&
    css`
      background: white;
      color: #1f1f1f;
      border: 2px solid white;
      &:hover{
        background: #1f1f1f ;
        color: white;
      }
    `
  }
  `;

  // 5. 스타일 확장(커스텀) 하기
  // Button 컴포넌트에 모서리를 둥글게하는 스타일이 추가된 컴포넌트
  const RoundedButton = styled(Button)`
    border-radius: 16px;
  `


function StyledPage() {
  return (
    <Wrapper>
      <Title>안녕, 리액트</Title>

      <Button width = "200px" height = "60px">Nomal</Button>

      {/* 버튼안 dark만 써도되요 (속성 값 키값 같으면) */}
      {/* $는 스타일 지정만을 위한 prop이 DOM요소로 렌더링 되는 것을 방지하기위해
       붙여 임시 prop으로 전환 할 수 있다. */}
      <Button $dark ={true}>Dark</Button> 

      <Button $inverted>Inverted</Button>    {/* 그냥 이름만 => 그냥 true값 */}

      <RoundedButton>Rounded</RoundedButton>
    </Wrapper>
    
  );
};

export default StyledPage;