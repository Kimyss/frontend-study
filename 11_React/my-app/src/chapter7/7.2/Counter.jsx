import React, { useState } from 'react';

function Counter(props) {
  // state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 해야함
  let [count, setCount] = useState(0);   //초기값 0  디스트럭처(?)
  console.log(useState(0));  //[0, ƒ]
  // useState()의 결과로 배열이 반환됨 -> [초기값0, 상태변경함수 ƒ]
  // 배열의 구조분해 할당을 사용하여 변수 선언 및 할당

  // Quiz
  const [color, setColor] = useState('blue'); //글자색 상태 (글자색변경을 위한 색상상태)
  const[button, setButton] = useState('구독');

  const[subscribe, setSubScribe] = useState(false);


  // state 미사용 시
  let wrongCount = 0;

  return (
    <>
      <p>총 {count}번 클릭했어요</p>
      {/* 1. state 직접수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재렌더링이 일어나지 XX */}
      <button
        type='button'
        onClick={() => {
          count++;
          console.log(count);   //값은 변경이 되나 갱신이 되지 않아 렌더링X
        }}
      > 클릭(잘못된방법)</button>

      <br />
      <br />


      {/* 1. state 변경함수를 이용한 수정 */}
      {/*  */}
      <button
        type='button'
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        클릭
      </button>

      <br />
      <br />

        {/* 3. state미사용 */}
        {/* 값은 증가되지만 재렌더링이 일어나지 않음 
          다른 이유로 재렌더링 발생 시, 값은 초기화됨*/}
          
        <p>총 {wrongCount}번 클릭했어요</p>
      <button
        type='button'
        onClick={() => {
          wrongCount++;
          console.log(wrongCount);   
        }}
      > 클릭(잘못된방법)</button>

      <br />
      <br />
      <hr />

      {/* Quiz: 글자색 바꾸기, 버튼 내용 바꾸기 */}
      <p style={{color: color }}>현재 글자색: {color} </p>
      <button type='button' onClick={()=>{
        setColor('red');
        console.log(setColor);
      }}>글자색 변경</button>

      <p>버튼 내용 바꾸기</p>
      <button type='button' onClick={()=>{
        setButton('구독안함');
      }}>{button}</button>

      <br />

      <p>버튼 내용 바꾸기</p>
      {/* <button type='button' onClick={()=>setSubScribe(true)}>
        {subscribe ? '구독완료' : '구독'}
      </button> */}

      <button type='button' onClick={()=>setSubScribe(!subscribe)}>
        {subscribe ? '구독완료' : '구독'}
      </button>
    </>
  );
}

export default Counter;