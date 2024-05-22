import { styled } from "styled-components";
import Button from "./Button";
import { MdAppRegistration as MDIcon } from "react-icons/md";

const InputInsert = styled.form`
  background: #ccc;
  display: flex;
`

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  /* color: white; */
  flex: 1;  // 버튼을 제외한 영역을 모두 파지하기

  &::placeholder{
    /* color :#dee2e6; */
  }
  
  .buttonAdmin{
    
  }
`;



function TodoInsert() {
  return (
    <>
      <InputInsert>
        <StyledInput
          placeholder="입력창"
        >
        </StyledInput>
        <MDIcon />
      </InputInsert>
      <div className="buttonAdmin">
        <Button buttonName = '정렬버튼' />
        <Button buttonName = '할일개수버튼' />
        <Button buttonName = '기능버튼3' />
        <Button buttonName = '기능버튼4' />
        
      </div>
    </>
  );
};

export default TodoInsert;