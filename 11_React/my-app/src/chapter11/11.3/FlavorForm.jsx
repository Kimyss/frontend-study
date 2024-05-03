import { useState } from "react";

function FlavorForm() {
  const [value, setvalue] = useState('coconut');
  
  const handleChange = (e)=>{
    setvalue(e.target.value);
  };

  const handleSubmit = (e)=>{
    alert('가장 좋아하는맛: ' + value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        좋아하는 맛 선택: 
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option>
          <option value="mango">망고</option>
        </select>

        {/* HTML DOM */}
        {/* <select>
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option>
          <option value="mango">망고</option>
        </select> */}
        <button type="submit">제출</button>
      </label>
    </form>
    
  );
};

export default FlavorForm;