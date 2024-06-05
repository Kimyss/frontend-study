import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, selectCount } from "./counterSlice";
import { useState } from "react";

// 5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기 (features/counter/Counter.js)

function Counter() {

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  // Redux Store에 있는 state를 가져오는 함수
  // const count =  useSelector((state)=>{
  //   return state.counter.value;
  // }); 
  const count = useSelector(selectCount);

  const [amount, setAmount] = useState('2');
  const incrementValue  = Number(amount) || 0;  //  NaN일 경우 기본값 0(앞에 falsy들어오면 뒤에것이 반환돼요)

  return (
    <>
      <div>
        <button
          type="button"
          // 전역 상태를 업데이트하는 유일한 방법
          // dispatch(): 액션 객체를 스토어에 보냄
          // -> 스토어는 해당 액션에 매칭되는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줌
          // decrement() : 액션 생성 함수
          // -> 실행결과 : 
          // {
          // payload: undefined;
          // type: "counter/decrement";
          // }
          onClick={() => {
            // dispatch({type: "counter/decrement"})  // ↓ counterSlice에서  리듀서에 대한 액션 생성 함수
            dispatch(decrement())
          }}>
          감소
        </button>
        {/* 꺼내온 값을 화면에 표시해 */}
        <span>{count}</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increment())
          }}
        >
          증가
        </button>

        <div>
          <input 
            type="text"
            value={amount}
            onChange={(e)=>{setAmount(e.target.value)}}
          />
          <button
            type="button"
            onClick={()=>{dispatch(incrementByAmount(incrementValue))}}
          >
            입력한 값 만큼 증가
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;