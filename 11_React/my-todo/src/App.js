import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";  //reset는 가져올 이름 {reset} 얘는 컴포넌트
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./components/Modal";

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
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: '수업 교안 작성하기',
    //   done: true
    // },
    // {
    //   id: 2,
    //   text: '시험 채점하기',
    //   done: true
    // },
    // {
    //   id: 3,
    //   text: '단계별 실습 예제 만들기',
    //   done: false
    // },
  ]);

  const [showModal, setShowModal] = useState(false) //모달상태
  const [editTodo, setEditTodo] = useState({});   //현재 수정할 todo상태

  const handleOpenModal = (id) => {
    // 모달 열면서 현재 수정할 todo를 state에 저장
    setEditTodo(todos.find((todo) => {
      return todo.id === id;
    }));
    setShowModal(true);
  };

  const handleCloseModal = (id) => {
    setShowModal(false);
  };

  const handlChange = (e) => {    // 제어 컴포넌트로 관리
    setEditTodo({
      ...editTodo,
      text: e.target.value
    });
  };
  const handleEdit = () => {       //실제 수정
    setTodos(todos.map((todo) => {
      return todo.id == editTodo.id ? editTodo : todo;
    }));
    handleCloseModal();
  }

  // 로컬 스토리지에서 가져오기
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || []; // 초기에 'todos'가 없으면 null을 반환함
    setTodos(dbTodos);
  }, []);

  // *로컬 스토리지에 저장하기 (주의 : DB가 아님, DB처럼 쓰면 안됨!)
  // 추가, 수정, 삭제 각 함수에 로직을 넣어도 되지만, 
  // 이제 리액트를 사용하니 useEffect()를 활용하면 한번에 처리가능
  // todos가 변경될 때마다 실행하라
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  // ** npm install uuid ID값



  // 새 객체를 만들 때마다 id값에 1씩 더해줘야하는데
  // id값은 렌더링 되는정보가 아님
  // 단순히 새로운 항목을 만들때 참조되는 값임
  // useRef()를 사용하여 변수 생성
  const nextId = useRef(4);


  // todos 배열에 새 할일 객체를 추가하기 위한 함수
  const handleInsert = (text) => {
    // todo라는 이름의 새로운 객체생성
    const todo = {
      // id :nextId.current,
      id: uuidv4(),
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
  const handleRemove = (id) => {
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
  };

  // todos 배열의 특정 요소를 수정하기 위한 함수
  // 클릭 한 애의 아이디값을 전달 받아서 특정 한 걔네를 체크 / 미체크
  const handleToggle = (id) => {
    // 방법1
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex((todo)=>{ // 이 함수에서 retrun true가 되는 값 반환
    //   return todo.id ===id;
    //   // todos.findIndex(todos => todo.id === id);
    // });
    // copyTodos[targetIndex].done = !copyTodos[targetIndex].done;
    // setTodos(copyTodos);

    // 방법2 배열을 다룰 땐 배열의 내장함수를 많이 이용한다 findIndex는? 내장함수아니?
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    }))
  };



  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} onModal={handleOpenModal} />

      </TodoTemplate>

      {/* 수정하기 모달 props로 넘겨 */}
      {showModal && (
        <Modal
          title='할 일 수정'
          onCloseModal={handleCloseModal}
          onEdit={handleEdit}
        >
          <input type="text" value={editTodo.text} onChange={handlChange} />
        </Modal>
      )}
    </>
  );
}

export default App;

// HTML 웹 스토리지란?
// 브라우저에서 제공하는 데이터 저장소
// 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음
// key-value 형태로 저장
// 최대 5MB까지 문자만 저장 가능
// 콘솔 창에서 연습해보기

// 웹 스토리지는 origin(도메인 및 프로토콜)당입니다.
// 같은 출처의 모든 페이지는 동일한 데이터를 저장하고 액세스할 수 있습니다.

// HTML 웹 스토리지 객체
// HTML 웹 스토리지는 클라이언트에 데이터를 저장하기 위한 두 가지 객체를 제공합니다.
// window.localStorage - 만료 날짜 없이 데이터를 저장
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨)
