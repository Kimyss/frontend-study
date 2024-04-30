import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return <button type='button' onClick={props.onClick}>로그인</button>;
}

function LogoutButton(props) {
  return <button type='button' onClick={props.onClick}>로그아웃</button>;
}

function LoginControlRefactoring(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <>
      {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 삼항연산자로 if-else 구문을 JSX 내부에서 표현 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링 하고 싶을때 사용 */}
      {isLoggedIn
      ? <LogoutButton onClick = {handleLogout}/>
      : <LoginButton onClick = {handleLogin}/>

      }
    </>
  );
}

export default LoginControlRefactoring;