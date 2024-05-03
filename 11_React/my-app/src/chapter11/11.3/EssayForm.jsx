import { useState } from "react";

function EssayForm() {
  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 작성하세요');
  
  const handlehange = (e)=>{
    setValue(e.target.value);
    //setValue;
    // tatget => 이벤트가 발생한대상
  }

  const handleSubmit = (e) =>{
    alert('제출된 에세이: ' + value);
    e.preventDefault();
  }


  return (
    
    <form onSubmit = {handleSubmit}>
      <label>
        에세이:
        <textarea value={value} onChange={handlehange}></textarea>
        {/* HTML DOM */}
        {/* <textarea>
          Hello World!
        </textarea> */}
        <button type="submit"> 제출 </button>
      </label>
    </form>
  );
};

export default EssayForm;