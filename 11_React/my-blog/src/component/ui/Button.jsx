// 공통 UI, TextInput 컴포넌트 ~ 공통으로 쓰이는 애들 모아둬
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const {title, onClick} = props;
// onClick 클릭했을때 실행 시킬 이벤트핸들러

return (
  <StyledButton onClick={onClick}>      
      {title || '버튼'}
    {/* props로 받아온 title이 있을때는 title의 값을 보여주고 없으면 기본값 '버튼' */}
    {/* 클릭 했을때 어떤 동작을 할 것인가는 상위 컴포넌트에서 받아옴 */}
    </StyledButton>
  );
};

export default Button;