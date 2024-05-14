
// 리액트에서 사용되는 변수들에 대해 알아보자

import { useRef } from "react";
import { useState } from "react";

// 전역변수
// 렌더링과 상관없는 "고정값"들은 전역변수로 선언
// 보통 상수 지정시
const globalConstatnVar = 1;

function ComponentVariable() {

  // 지역 상태
  // 값이 변경되면 재렌더링 발생
  const [count, setstate] = useState(1);
  console.log('count' , count);

  // 지역 변수 
  // 값은 변경되지만 재렌더링 되지않음
  // 렌더링 될 때마다 초기화 됨
  let id = 1;
  console.log('id ', id);

  // uesRef()로 만든 지역변수
  // 얘도 State가 아니기에 값은 변경되지만 재렌더링 되지않음
  // 지역변수와의 차이점은 매번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환
  // 그래서 렌더링 될 때 값이 초기화 되지 않음

  const idRef = useRef(1);
  console.log('idref: ', idRef);

  return (
    <>
      <p>총 {count}번 렌더링</p>
      <button onClick={()=>{
        setstate(count +1);
      }}>
        count 업데이트
        <br />
        (재렌더링 발생)
      </button>

      <br />

      <p>현재 id값: {id}</p>
      <button onClick={()=>{
        id++;
        console.log(id);
      }}>
        count 업데이트
        <br />
        (재렌더링 X)
      </button>

      <p>idRef 테스트</p>
      <button onClick={()=>{
        idRef.current++;
        console.log(idRef);
      }}>
        idRef 업데이트
        <br />
        (재렌더링 X)
      </button>
    </>
  );
};

export default ComponentVariable;