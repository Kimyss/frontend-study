function PostDetail(props) {
  const {posts, currentIndex, setPosts} = props;
  // 구조분해 할당 안하면 props.~ 코드가 길어진다.

  return (
    <div className="detail">
      <h4>제목: {posts[currentIndex]}</h4>
      <p>날짜: 2023 1월 20일</p>
      <p>작성자 : goni.kim</p>
      <p>... 상세내용 ...</p>  

      {/* 간단한 포스트 수정하기  */}
      <button type="button"
        onClick={()=>{
          // props.setPosts(); // 구조분해할당 안했을시

          // 배열이나 객체의 state를 변경하는법
          // 새로운 배열 또는 객체를 만들어 변경하고 set함수에 넣어줘야 함
          const copyPosts = [...posts];   //배열의 복사본 만들기
          copyPosts[currentIndex] = `${copyPosts[currentIndex]} - 수정됨`;
          setPosts(copyPosts);

          // state 변경할 때 알아야 할 것!
          // 1. state 변경 함수의 특징
          // 기존 state가 신규 state랑 같은 경우, 변경 안함
          // 2.배열 / 객체의 특징 배열은 직접 복사하면 주소값 변경되지 않아요
          // 변수에 주소(참조)값이 저장됨
          // posts[currentIndex] = 'ddd'  // 값은 변경 되었으나 주소값은 변경되지XX 

        }}
      >
        수정하기
        </button>
    </div>
  );
};

export default PostDetail;