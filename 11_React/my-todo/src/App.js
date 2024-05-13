import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";  //reset는 가져올 이름 {reset} 얘는 컴포넌트
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";

// 패키지설치
// npm install styled-components styled-reset react-icons
// pacjage.json에서 각각 버전 확인 바라요 styled-components | styled-reset | react-icons 

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링 하면 됨
const GlobalStyle = createGlobalStyle`  //크리에트글로벌스타일
${console.log(reset)}
/* reset css 넣기 */
${reset}

/* 글로벌(공통스타일) */
body {
  background: #e9ecef;
}
`

function App() {
  return (
    <>
    <Reset />
    <GlobalStyle />
    <TodoTemplate>
      <TodoInsert />
      <TodoList />

    </TodoTemplate>
    </>
  );
}

export default App;
