import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import data from "../../data.json";
import CommentList from "../list/ComentList";
import TextInput from "../ui/TextInput";
import { useState } from "react";


const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

// 글을 볼 수 있게 해주는 페이지 (컴포넌트)
function PostViewPage() {
  const navigate = useNavigate();

  // 댓글 내용을 위한 state
  const [comment, setComment] = useState('');


  // URL 파라미터로 전달받은 postView값 가져오기
  // userParams(): URL파라미터 경로에 입력된 값을 가져올 수 있다.
  console.log(useParams());
  const { postView } = useParams();

  // 배열 전체에서 해당되는 글 찾기
  const post = data.find((item) => {
    return item.id === postView;
  });
  console.log(post);
  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로가기"
          onClick={() => { navigate('/') }}
        />
        <PostContainer>
          {/* 데이터바인딩 */}
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        {/* 댓글리스트 */} 

        {/* Quiz 데이터바인딩 */}
        <CommentList comment = {post.comments}></CommentList>

        {/* 댓글입력 */}
        <TextInput
          height = {40}
          value = {comment}
          onChange = {(e)=>{setComment(e.target.value)}}
          />

        {/* 댓글 등록 버튼 */}
        <Button
          title = "댓글 등록"
          onClick = {()=>{navigate('/')}}
         />


      </Container>
    </Wrapper>
  );
};

export default PostViewPage;