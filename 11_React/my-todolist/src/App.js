import { Reset } from "styled-reset";
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from "styled-components";
import TodoInsert from "./components/TodoInsert";


const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
` 

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate />
      
    </>
  );
}

export default App;
