import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false); //초기값은 체크가 되어 있지 X false값
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [roomType, setRoomType] = useState('SINGLE');

  const handleBreakfastChange = (e)=>{
    setBreakfast(e.target.checked);
  };

  const handleGuestsChange = (e) =>{
    setNumberOfGuests(Number(e.target.value));
  };

  const handleRoomChange = (e)=>{
    setRoomType(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}, 룸타입: ${roomType}`)
  }

  return (
    <form>
      <label>
        조식여부:
        <input
        type="checkbox"
        // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 타입의 값
        checked = {breakfast}
        onChange={handleBreakfastChange}
        />
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
        type="number"
        value={numberOfGuests}
        onChange={handleGuestsChange}
        />
      </label>

      <br />

      <label>
        룸타입:
        <input 
        type = "radio"
        name = "roomType"
        value= "SINGLE"
        checked={roomType == 'SINGLE'}  // 이렇게 한 이유?
        onChange={handleRoomChange}
        />
        싱글
      </label>

      <label>
        <input 
        type = "radio"
        name = "roomType"
        value= "DOUBLE"
        checked={roomType == 'DOUBLE'}
        onChange={handleRoomChange}
        />
        더블
      </label>

      <label>

        <input 
        type = "radio"
        name = "roomType"
        value= "TWIN"
        checked={roomType == 'TWIN'}
        onChange={handleRoomChange}
        />
        트윈
      </label>

      <br />

      <button type="submit" onClick={handleSubmit}>전송(제출)</button>
    </form>
    
  );
};

export default Reservation;