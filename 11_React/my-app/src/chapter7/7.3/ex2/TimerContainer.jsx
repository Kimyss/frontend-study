import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
    {showTimer? <Timer /> : showTimer }
    <br />
    <button type="button" onClick={() => setShowTimer(!showTimer)}>
      On / Off 토글
    </button>
    </>
  );
};



export default TimerContainer;