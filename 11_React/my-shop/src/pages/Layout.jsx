import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logoutSuccess, selectUser } from "../features/user/userSlice";
import axios from "axios";

function Layout() {

  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async ()=>{
    const tokken = localStorage.getItem('token');
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/logout`,{
      headers:{
        Authorization: tokken
      }
    });
    console.log(result);
    // 전역상태초기화
    dispatch(logoutSuccess());
    // 로컬스토리지초기화
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      {/* 헤더 영역: 상단 내비게이션 바 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#" onClick={()=>{navigate('/')}}>YonexShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
            </Nav>
            {user
            ?(
              <>
                <Link>{user.nickname}님 반가워요</Link>
                <Button variant="onLine-success" onClick={handleLogout}>로그아웃</Button>
              </>
             )
             :  <Button variant="onLine-success" onClick={() => {navigate('/login')}}>로그인</Button>
            }
          </Container>
        </Navbar>
      </header>

      {/* 자식 컴포넌트가 렌더링 될 위치 */}
      <Outlet />

      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; Yonex Company. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;