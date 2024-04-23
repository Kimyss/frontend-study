// ★ 리액트 컴포넌트 대문자로 작성

// 리액트 함수 컴포넌트 
// Only JS로 짠 코드(나중에는 JSX사용)

function LikeButton() {
  const [isClicked, setIsCliked] = React.useState(false);

  return React.createElement(
    'button', // 태그
    { onClick: () => setIsCliked(true) }, // 속성
    isClicked ? 'you liked this.' : 'Like'  //자식요소들
  );
}

// React - 상태를 만들고 상태가 바뀔때 UI 어떻게 바뀔지-



const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));