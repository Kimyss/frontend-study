import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
    <button type="button" onClick={()=>setIsVisible(false)}>사라져요</button>
    <button type="button" onClick={()=>setIsVisible(true)}>나타나요</button>
    {isVisible && <EffectSummary />}
    </>
  );
};

export default EffectContainer;