import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 98;
  `;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  
  button{
    background: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
    border-radius: 5px;
    width: 50px;
    height: 25px;
  }
  `;

const ModalMessage = styled.p`
  padding: 30px;
  margin-bottom: 15px;
   border: 1px solid black;
  border-radius: 5px;
  
  `;



const Modal2 = (props) => {
  const { message, onClose } = props;
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalMessage>{message}</ModalMessage>
        <button type='button' onClick={onClose}>닫기</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal2;