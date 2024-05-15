import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return <button type='button' onClick={props.onClick}>로그인</button>;
}

function LogoutButton(props) {
  return <button type='button' onClick={props.onClick}>로그아웃</button>;
}

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }
  // 2단계: if문 사용 + button 변수에 컴포넌트를 대입
  // (참고) JSX 내부에서 조건부 렌더링해도 됨. 근데 JSX 내부에서는 if문 사용 불가
  // => 삼항 연산자 또는 논리 연산자로 대체 가능

  return (
    <>
      {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}

export default LoginControl;