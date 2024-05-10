// 개념설명만을 위한 예제

import { useContext } from "react";

// Context를 사용하면 모든 컴포넌트를 일일이 통과하지 않고도
// 원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음
// 'light'를 기본값으로 하는 테마 Context를 만드는 코드
// 리액트 객체 안에 있어요 ~
const ThemeContext = React.createContext('light');   //기본값정해줘 'light'

//  <ThemeContext.Provider value="dark">   dark 안써주면 기본값light

function App() {
  // probider를 이용해 하위 트리에 테마값을 보내줌
  // 아무리 깊숙히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있음
  // 아래 예시에서는 dark를 현재 테마값으로 보내고 있음
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  //  이제 중간에 있는 컴포넌트가 일일이 테마를 넘겨줄 필요가 없음
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton(props) {
  // useContext 훅 사용 시
  const value = useContext(ThemeContext);
  return (
    // <ThemeContext.Consumer>
    //   {(value) => <Button theme={value} />}
    // </ThemeContext.Consumer>
    <button theme = {value} />
  );
}

// 최상위 App  - Toolbar - ThemedButton - Button