// 투두리스트아이템 목록하나하나 컴포넌트
// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌

import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 짝수번째 배경색 지정 odd는 홀수 */
  &:nth-child(even){
    background: #f8f9fa;
  }

  /* 아이템 사이사이에 위쪽 테두리 넣기  */
  & + &{
    border-top: 1px solid #dee2e6;
  }
`;


const Checkbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  /* svg 글자처럼 취급 */
  /* odoListItemWrapper의 자식들한테적용시킨다 */
  svg{
    font-size: 1.5rem;
    color: ${props => props.done && css`#22b8cf`};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;  // 차지할 수있는 영역 모두차지

  /* 조건부 스타일링 시 여러 개의 css를 설정할때는 아래와 같이 사용 */
  ${props => props.done &&
    css`
    color: #adb5bd;
    text-decoration: line-through;
  `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #ff8787;
  }
`;

function TodoListItem({ todo: { id, text, done }, onRemove, onToggle, onModal }) {
  return (
    <TodoListItemWrapper>
      <Checkbox done={done} onClick={() => onToggle(id)}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text done={done}>{text}</Text>
      <Edit onClick={() => onModal(id)}>
        <MdEdit />
      </Edit>
      <Remove
        onClick={() => onRemove(id)}
      >
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;
