import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";  //reset는 가져올 이름 {reset} 얘는 컴포넌트
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

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
// App()이 공통된 부모.

function App() {
  // todos 배열 안에 객체 형태로 데이터가 존재
  // id, 내용, 완료 여부
  // TodoList에 props로 전달
  const [todos,setTodos] = useState([
    {
      id: 1,
      text: 'React props 공부하기',
      done: true
    },
    {
      id: 2,
      text: 'useState, Hook 공부하기',
      done: true
    },
    {
      id: 3,
      text: '종합 공부하기',
      done: false
    }
  ]);

  // 새 객체를 만들 때마다 id값에 1씩 더해줘야하는데
  // id값은 렌더링 되는정보가 아님
  // 단순히 새로운 항목을 만들때 참조되는 값임
  // useRef()를 사용하여 변수 생성
const nextId = useRef(4);


  // todos 배열에 새 할일 객체를 추가하기 위한 함수
  const handleInsert = (text) =>{
    // todo라는 이름의 새로운 객체생성
    const todo = {
      id :nextId.current,
      text,
      done: false
    }

    // 방법1
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos);  //새로운 배열을 만들어서 넣어줌

    // setTodos([...todos, todo]);

    // 방법 2 - 배열의 내장함수 이용
    setTodos(todos.concat(todo));
    
    nextId.current += 1;  //nextId에 1씩 더하기

  };

  // todos 배열에서 id값으로 항목을 지우기 위한 함수
  const handleRemove = (id) =>{
    // 방법1
    // const copyTodos = [...todos];
    // const targetIndex =  todos.findIndex((todo)=>{
    //   return todo.id === id;
    // });
    // copyTodos.splice(targetIndex,1)
    // // 배열에서 특정요소 제거 splice !
    
    // setTodos(copyTodos);

    // 방법 2 - 배열의 내장 함수 이용
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <>
    <Reset />
    <GlobalStyle />
    <TodoTemplate>
      <TodoInsert onInsert = {handleInsert} />
      <TodoList todos ={todos} onRemove = {handleRemove} />

    </TodoTemplate>
    </>
  );
}

export default App;
