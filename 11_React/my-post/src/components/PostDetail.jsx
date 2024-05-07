function PostDetail(props) {
  const {posts, currentIndex} = props;
  // 구조분해 할당 안하면 props.~ 코드가 길어진다.

  return (
    <div className="detail">
      <h4>제목: {posts[currentIndex]}</h4>
      <p>날짜: 2023 1월 20일</p>
      <p>작성자 : goni.kim</p>
      <p>... 상세내용 ...</p>
    </div>
  );
};

export default PostDetail;