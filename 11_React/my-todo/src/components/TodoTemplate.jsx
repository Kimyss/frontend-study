// 얘먼저, 바깥 껍데기

import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  width: 512px;
  /* ↓ 가로길이를 갖는 블럭요소 */
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;  //넘치는 것들 숨겨버려


  /* 아래와 같이 작성하면 하위 (후손, 자손)를 의미 한다  투두템플릿래퍼 하위에 얘가 잇으면 적용한다*/
  /* 아래처럼 컴포넌트로 따로 만들어도 되고 아니면 Sass처럼 내부에 class처럼 만들어도 됨 */
  .app-title{
    background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  };

  .content{
    background: white;
  }
`
// 컴포먼트만들기
const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 화면을 가운데 정렬하고, 앱 타이틀을 보여주는 컴포넌트
// children을 통해서 내부 자식 엘리먼트들을 props로 받아와서 렌더링 해준다
function TodoTemplate(props) {
  const { children } = props;
  return (
    <>
    <TodoTemplateWrapper>
    {/* <AppTitle>일정관리</AppTitle> */}
    <div className="app-title">일정관리</div>
    <div className="content">{children}</div>
    </TodoTemplateWrapper>
    </>
  );
};

export default TodoTemplate;
