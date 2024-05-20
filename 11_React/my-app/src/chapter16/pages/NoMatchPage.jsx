import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const NoMatchPageWrraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  font-size: 64px;
  `;

  function NoMatchPage() {
    const navigate = useNavigate();

    return (
      <NoMatchPageWrraper>
        <h1>404 Not Found</h1>
        <button type="button" onClick={()=>{
          navigate('/')
        }}>메인으로</button>
      </NoMatchPageWrraper>
    );
  };


export default NoMatchPage;