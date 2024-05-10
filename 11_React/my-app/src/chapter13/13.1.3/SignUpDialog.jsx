import { useState } from "react";
import Dialog from "./Dialog";


function SignUpDialog() {
  const [login, setLogin] = useState('');

  const handleChange = (e)=>{
    setLogin(e.target.value);
  };

  const handleClick = ()=>{
    alert(`화성에 오신걸 환영해요 ${login}`);
  }



  return (
    <Dialog
      title = "화성탐사프로그램"
      message = "당신 이름은?"
      >
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={handleClick}>가입하세요!</button>
      </Dialog>
  );
};

export default SignUpDialog;