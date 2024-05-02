import { useState } from "react";


function ListKey() {
  const [list, setList] = useState(['과제하기', '복습하기']);
  const [value, setValue] = useState('');

  const addToList = () =>{
    // 잘못된 코드
    // 1)직접변경   -> 재렌더링이 일어나지 X
    // list.unshift(value);
    // console.log(list);

    // 2)set함수 사용 + 변경된 기존 배열 넣기
    // setList(list);  //set함수를 쓴다고 하더라도 기존배열을 넣어주면 값의 변경을 감지하지 못함

    // 3)올바른 코드 - 기존배열을 복사하여 새로운 배열(새로운 주소값)을 만들어야함
    setList([value, ...list]);
    // console.log(list);
    // setList([...list, value]);
    // console.log(list);
    

    // input에 입력한 이전값 초기화
    setValue('');
    console.log(value);
  };

  // 리스트 아이템 추가할 때마다 DOM에 무슨일이 일어나는지 개발자도구로 확인해보기
  // 키 값이 없으면 추가된 아이템 뿐만 아니라 전체가 다 DOM에 업데이트 됨(비효율적)
  // 각 아이템에 키를 추가하지 않았기 때문에 리액트는 어떤 항목이 업데이트 됐는지 알지 못함
  // 100개, 1000개 항목이 많아질수록 성능 저하

  return (
    <>
    <input type="text" value ={value} onChange={(event)=>{setValue(event.target.value);}} />
    <button type="button" onClick={addToList}>추가</button>
    <ul>
      {list.map((item, index)=>{
        // return <li>{item}</li>;
        // return <li key = {item}>{item}</li>;
        return <li key = {index}>{item}</li>;   //index를 키 값으로 사용하면 고유하지 않고 바뀔수도 있음

      })}
    </ul>

    <ul>
      {[
        <li key = {0}>{1}</li>,
        <li key = {1}>{2}</li>,
        <li key = {2}>{3}</li>,
        <li key = {3}>{4}</li>,
        <li key = {4}>{5}</li>
      ]}
    </ul>
    </>
  );
};

export default ListKey;