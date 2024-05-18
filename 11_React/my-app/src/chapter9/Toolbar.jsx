import React, { useState } from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  },
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogOut } = props;   //객체 구조 분해 할당


  return (
    <>
      <div style={styles.wrapper}>
        {/* 로그인 / 로그아웃 버튼 누를 때마다 IsLoggedIn값이 바뀌고
          로그인 / 로그아웃 버튼 바뀌도록 조건부 렌더링
          로그인 상태이면 인사말 나오도록   */}
        {isLoggedIn && <span style={styles.greeting}> 환영합니다 </span>}
        {isLoggedIn
          ? <button type='button' onClick={onClickLogOut}>로그아웃</button>
          : <button type='button' onClick={onClickLogin}>로그인</button>
        }

        {/* 또는 */}

        {isLoggedIn
          ? (
            <>
              <span style={styles.greeting}>환영합니다</span>
              <button type="button" onClick={onClickLogOut}>로그아웃</button>
            </>
          )
          : <button type="button" onClick={onClickLogin}> 로그인</button>
        }
      </div>
    </>


  );
}

export default Toolbar; 