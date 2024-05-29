import { Link } from "react-router-dom";

function RouterEx() {
  return (
    <>
     <h1>Router Page</h1>
     <ul>
      <li><Link to = "https://www.google.com/">구글링 하러 가기</Link></li>
      <li><Link to = "/">메인으로가기</Link></li>
      
     </ul>
    </>
  );
};

export default RouterEx;