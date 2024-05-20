import { styled } from "styled-components";

const StyledTextarea = styled.textarea`
  width : calc(100% - 32px);
  height: ${props => props.height && props.height + 'px'};
  padding: 16px;
  line-height: 20px;
`;

// {${height} => height && height + 'px'}; 참고: 곧장 구조분해 할당
// 공통 텍스트 컴포넌트
function TextInput(props) {
  const {height, value, onChange} = props;

  return (
    <>
    <StyledTextarea height = {height} value = {value} onChange = {onChange} />
    </>
    //여기에 선언하는 것이 아닌 부모 쪽에서 값들을 받아와 
  );
};

export default TextInput;