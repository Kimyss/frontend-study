import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import RouterEx from "./RouterEx";

function RouterExMain() {
  return (
    <>        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/RouterEx" element={<RouterEx />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default RouterExMain;