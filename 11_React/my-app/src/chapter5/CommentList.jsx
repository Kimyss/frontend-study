import React from 'react';
import Comment from './Comment';


// 댓글들을 포함하는 컴포넌트 
const CommentList = (props) => {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터자유롭게작성) */}
      <Comment name = "피카추" content = "치지직"/>
      <Comment name = "파이리" content = "더워요~"/>
      <Comment name = "꼬부기" content = "목말라"/>
    </div>
  );
};

export default CommentList;