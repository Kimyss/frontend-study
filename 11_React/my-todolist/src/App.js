import { Reset } from "styled-reset";
import TodoTemplate from './components/TodoTemplate';
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";


const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}

textarea{
  width: 350px;  
  height: 150px; 
  resize: both;  
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
    setTodos([...todos, newTodo]);
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id;
    }));
  };

  const handleTogle = ((id) => {
    const copyTodo = [...todos];
    const copyIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });
    copyTodo[copyIndex].done = !copyTodo[copyIndex].done;
    setTodos(copyTodo);
  });

  const [showModal, setShowModal] = useState(false);
  const onModal1 = (id) => {
    setEditTodo(todos.find((todo) => {
      return todo.id === id;
    }));
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleEdit = () => {
    setTodos(todos.map((newTodo) => {
      return newTodo.id === editTodo.id ? editTodo : newTodo;
    }));
    handleClose();
  };

  const [editTodo, setEditTodo] = useState({});

  const handleChange = (e) => {
    const copyEditTodo = { ...editTodo };
    copyEditTodo.text = e.target.value;
    setEditTodo(copyEditTodo);
  };

  const handleSorted = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      done: false
    };
    const copyTodo = [...todos, newTodo];
    copyTodo.sort((a, b) => {
      if (a.text > b.text) return 1;
      if (a.text === b.text) return 0;
      if (a.text < b.text) return -1;
    });
    setTodos(copyTodo);
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert addTodo={addTodo} value={todos.text} onSorted={handleSorted} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleTogle} onModal1={onModal1} />
      </TodoTemplate>
      {showModal ? <Modal
        title="수정하기"
        onClose={handleClose}
        onEdit={handleEdit}
      >
        <textarea value={editTodo.text} onChange={handleChange} />
      </Modal>
        : null}

    </>
  );
}

export default App;
