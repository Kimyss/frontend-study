import { Link, Outlet, useNavigate } from "react-router-dom";

function GamePage() {
  const navigate = useNavigate();

  return (
    <>
    <h1>게임 페이지</h1>
    <ul>
      <li>
        <Link to = "/games/hot">인기게임</Link>
      </li>
      <li>
        <Link to ="/games/new">신작게임</Link>
        </li>
    </ul>

    {/* Nasted Route의 자식 엘리먼트를 해당 위치에 보여주는 역할 */}
    <Outlet />
    

    {/* Quiz : 메인으로 돌아가는버튼 */}
    <button onClick= {()=> {navigate('/')}}>
      메인으로 돌아가기
    </button>
    </>
  );
};

export default GamePage;