import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

// map() 함수를 사용하여 CommentListItem을 반복 렌더링하는 컴포넌트
function CommentList(props) {
  const {comment} =props;

  return (
    <Wrapper>
      {comment.map((commenta)=>{
        return <CommentListItem key = {commenta.id} comments1 = {commenta} />
      })}
    </Wrapper>
  );
};

export default CommentList;