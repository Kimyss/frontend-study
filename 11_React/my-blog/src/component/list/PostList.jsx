import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

// map() 함수를 사용하여 postListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  const {posts} =props;
  console.log(posts); //로그 찍어보면 배열
  
  return (
    <Wrapper>
      {/* Quiz : posts배열을 반복 렌더링하기 상위에서 받아오기 */}
      {posts.map((post)=>{
        return <PostListItem key = {post.id} post = {post}/>
      })}
    </Wrapper>
  );
};

export default PostList;