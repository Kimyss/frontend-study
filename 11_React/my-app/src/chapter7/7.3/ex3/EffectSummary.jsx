import { useEffect, useState } from "react";


// useEffect()가 실행되는 모든 케이스를 정리
function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect() 공통사항
  // 1) 렌더링 직후에 실행됨
  // 2) 마운트 시에는 무조건 실행됨
  // 3) return 하는 함수는 언마운트 시에 무조건 실행됨

  useEffect(()=>{
    console.log('나는 매번 실행됨');

    return () =>{
      // 해당 effect가 실행되기 전 과 언마운트 시 실행됨
    };
  });

// 마운트 +count가 변할때마다 실행됨 input과 관계X
  useEffect(()=>{
    console.log('%ccount가 변함', 'color: red; background:#ffdae0');

    return () =>{
      // 해당 effect가 실행되기 전 과 언마운트 시 실행됨
    };
  },[count]);

  useEffect(()=>{
    console.log('%cname이 변함', 'color: blue; background:#ffdae0');

    return () =>{
      // 해당 effect가 실행되기 전 과 언마운트 시 실행됨
    };
  },[name]);

  // 마운트 될 때만 실행됨
  useEffect(()=>{
    console.log('%c마운트 될 떄만 실행', 'color: yellow; background:black');

    return () =>{
      // 언마운트 될 때만 실행
      console.log('%c언마운트 될 때만 실행', 'color:red; background : black');
    };
  },[]);

  return (
    <>
    <p>카운트 : {count}</p>
    <button type="button" onClick={()=>{setCount(count + 1)}}>
      카운트 +1
    </button>
    <p>이름 :{name}</p>
    <input type="text" value={name} onChange={ e => setName(e.target.value)} />
    </>
  );
};

export default EffectSummary;