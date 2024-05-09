import { useRef } from "react";

function FileInput() {
  const FileInput=  useRef(null);
  console.log(FileInput);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(FileInput.current.files);
    alert(`선택된 파일: ${FileInput.current.files[0].name}`);
  };

  // file input은 값을 설정 할 수 없고 사용자가 첨부한 파일의 정보만
  // 읽어 올 수 있기 때문에 비제어 컴포넌트가 됨
  // 파일에 접근하기 위해서 DOM요소의 ref를 만들어 접근

  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일업로드 :
        <input ref={FileInput} type="file" />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
};

export default FileInput;