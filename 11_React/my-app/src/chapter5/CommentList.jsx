import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '피카추',
    content: '치지직~'
  },
  {
    name: '파이리',
    content: '여름 더워요'
  },
  {
    name: '꼬부기',
    content: '목말라, 삼다수 좋아요'
  }
];

// 댓글들을 포함하는 컴포넌트 
const CommentList = (props) => {
  return (
    <div>
      {/* <Comment />
      <Comment />
      <Comment /> */}

      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터자유롭게작성) */}
      {/* <Comment name="피카추" content="치지직" />
      <Comment name="파이리" content="여름 더워요" />
      <Comment name="꼬부기" content="목말라, 삼다수 좋아요" /> */}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 
        일반 데이터배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨
        map() 기존배열을 가공, 변경 ~ */}
      {/* jsx 내에서 자바스크립트 코드 사용하려면 중괄호부터.*/}
      {comments.map((comment, index) => {
        console.log(index, comment);
        return <Comment key={index} name={comment.name} content={comment.content} />;
      })}

      {/* ==> map() 함수의 결과 */}
      {
        [
          <Comment key={0} name={'피카추'} content={'치지직'} />,
          <Comment key={1} name={'파이리'} content={'여름 더워요'} />,
          <Comment key={2} name={'꼬부기'} content={'목말라, 삼다수 좋아요'} />
        ]
      }
      {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content} />)}
    </div>
  );
};

export default CommentList;