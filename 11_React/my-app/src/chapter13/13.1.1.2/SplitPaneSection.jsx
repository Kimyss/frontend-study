import './SplitPaneSection.css';


function Contacts() {
  return <div className='Contacts'/>;
}

function Chat() {
  return <div className='Chat'/>;
}

// 화면을 왼쪽과 오른쪽으로 분활해서 보여주는 컴포넌트
function SplitPane(props) {
  console.log(props);
  return(
  <div className='SplitPane'>
    <div className='SplitPane-left'>
      {props.children[0]}
    </div>
    <div className='SplitPane-right'>
      {props.children[1]}
    </div>
  </div>
  );
}

// 1. 리액트는 props.children을 통해 하위 자식 엘리먼트를 하나로 모아서 제공
// 2. children 하나에 다 담아서 쓰고 싶지 않다면?
// 별도로 props를 정의해서 각각 원하느 컴포넌트 (엘리먼트)를 넣어주면 됨
function SplitPaneSection() {
  return (
    // <div className='s'>
    <SplitPane>
      <Contacts />
      <Chat />
    </SplitPane>
    // </div>
  );
};

export default SplitPaneSection;