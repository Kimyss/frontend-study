import { Reset } from "styled-reset";
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";


const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      done: false
    };
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert addTodo={addTodo} />
        <TodoList todos={todos} />
      </TodoTemplate>

    </>
  );
}

export default App;
