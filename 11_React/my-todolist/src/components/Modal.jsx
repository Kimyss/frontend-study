import { Children } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;    //뷰포트에 고정
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContainer = styled.div`
  width: 400px;
  background: #f1f1f1;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow-y: auto;


  button{
  cursor: pointer;
  border-radius: 5px;
}

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  
  hr{
    margin: 0;
    border: 1px solid #ccc;
  }

  .body{
    padding: 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
  }
  svg{
    cursor: pointer;
  }
`;

function Modal(props) {
  const { title, onClose, onEdit, children } = props;

  return (
    <ModalBackground >
      <ModalContainer>
        <div className="header">
          <span className="modal-title">{title}</span>
          <MdClose onClick={onClose} />
        </div>
        <hr />
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button type="button" onClick={onEdit}>확인</button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;