// 다이얼로그를 사용할 부모 컴포넌트 

import Dialog from "./Dialog";

function DialogContainer() {
  return (
    <>
    {/* WelcomeDialog */}
    <Dialog
      title = "어서오세요."
      message = "저희 우주선을 찾아주셔서 감사합니다!"
      color = "blue"
    />

    <br />

    {/* AlertDialog */}
    <Dialog 
      title = "경고합니다"
      message = "관계자 외 출입 금지합니다"
      color = "red"
      />
    </>
  );
};

export default DialogContainer;