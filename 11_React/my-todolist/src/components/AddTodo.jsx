import { useState } from "react";

function AddTodo() {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      일정추가
      <input 
        id = "todo"
        name="todo"
        value={input}
        onChange={((e)=>{
          return e.target.value
        })} 
      />
    </form>
  );
};

export default AddTodo;
