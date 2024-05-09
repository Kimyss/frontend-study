import { useEffect, useRef } from "react";

  {/* 버튼누르면 강제로 포커스가게끔 */}
function TextInputWithFocusButton() {
 const inputEl = useRef(null); //인자값으로 초기값을 넣어줄 수 있어요 실행되고나서 래퍼런스객체리턴됨
 console.log(inputEl);    // 래퍼런스 객체라 부르는 일반 자바스크립트 객체를 반환함

 useEffect(()=>{
  // 마운트 됐을때(렌더링이후) 실행 되므로 input 엘리먼트가 나옴, 비동기 함수, 실행하고 넘어가요 콜백함수를 들고 있다가 모든 렌더링 후에 실행
  console.log(inputEl);

  // 활용 예 :  로그인이나 회원가입 화면이 처음 보여질 때 자동 포커스 
 }, []);   

 const handleButtonClick = () =>{
  // 여기서 inputEl.current에 text input 객체를 담고 있음
  inputEl.current.focus();  //강제 포커스
 }
 


  return (
    <>
    {/* ref 속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근가능  */}
    <input ref={inputEl} type="text" />
    <button type="button" onClick={handleButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton;