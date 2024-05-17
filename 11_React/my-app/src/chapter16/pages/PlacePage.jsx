import { Link, useNavigate } from "react-router-dom";

function PlacePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>장소페이지</h1>
      <ul>
        <li>인천</li>
        <li>동탄</li>
      </ul>

      {/* Quiz : 메인으로 돌아가는버튼 */}
      <button onClick={()=>{navigate('/')}}>
       메인으로돌아가기
      </button>
    </>
  );
};

export default PlacePage;