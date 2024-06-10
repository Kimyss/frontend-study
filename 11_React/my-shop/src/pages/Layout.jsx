import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
    
    {/* 헤더 */}
    <header>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">시기샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>홈</Nav.Link>
            <Nav.Link >장바구니</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>
    </header>

    {/* 자식 컴포넌트 렌더링 될 위치 */}
    <Outlet />

    <footer>
      <p className="py-5 mb-0 bg-dark text-white">
        &copy; KYS YS Kim. All Rights Reserved.
      </p>
    </footer> 
    </>
  );
};

export default Layout;