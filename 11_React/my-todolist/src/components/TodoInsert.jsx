import { styled } from "styled-components";
import Button from "./Button";
import { PiCursorClickBold } from "react-icons/pi";
import { useState } from "react";

const InputInsert = styled.form`
  background: white;
  display: flex;
  margin: 30px 3px;
  border : 1px solid black;
  border-radius : 3px
`

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 16px;
  /* color: white; */
  flex: 1;    // 버튼을 제외한 영역을 모두 파지하기
`;


function TodoInsert() {
  const [todoInsert, setTodoInsert] = useState('');

  const handleInput = (event) => {
    setTodoInsert(event.target.value);
  }
  return (
    <>
      <InputInsert>
        <StyledInput
          type="text"
          placeholder="할일 입력창"
          value={todoInsert}
          onChange={handleInput}
        >
        </StyledInput>
        <button type="submit">
          <PiCursorClickBold />
        </button>
      </InputInsert>
      <div className="buttonAdmin">
        {/* <Button buttonName='정렬버튼' />
        <Button buttonName='할일개수버튼' />
        <Button buttonName='기능버튼3' />
        <Button buttonName='기능버튼4' /> */}
      </div>
    </>
  );
};

export default TodoInsert;