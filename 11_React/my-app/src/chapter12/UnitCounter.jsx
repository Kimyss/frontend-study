import { useState } from "react";

function UnitCounter(props) {
  const{length, onLengthChange} = props;

  // Local State 실습
  // 컴포넌트마다 각각 개별적인 상태를 갖게 됨 유닛칼큐래이터 안의 유닛카운터는 각각 움직인다.
  // 같이 움직이게 하려면 쉐어드스테이트 필요
  const [localLength, setlocalLength] = useState(1);

  return (
    <>
      {/* Local State */}
      {/* <button type="button" onClick={()=>{
      setlocalLength(Math.max(localLength -1, 0));    //max 두개중에 최대값 비교 후 뒤에꺼 반환(?)
    }}> - </button>

    {localLength}

    <button type="button" onClick={()=>{
      setlocalLength(localLength + 1);
    }}>+</button> */}


    {/* Shared State */}
      <button type="button" onClick={() => {
        onLengthChange(Math.max(length - 1, 0));    //max 두개중에 최대값 비교 후 뒤에꺼 반환(?)
      }}> - </button>

      {length}

      <button type="button" onClick={() => {
        onLengthChange(length + 1);
      }}>+</button>
    </>
  );
};

export default UnitCounter;