
// Book이라는 이름의 함수 컴포넌트 
// 이제는 JSX로 코딩

function Book(props) {   // 컴포넌트 = 틀.  props : 가장많이 사용하는 변수명~
  console.log(props);    // props = 재료 인자값을 무엇을 전달하냐에 따라서 UI, 정보 달라져요
  return(
    <div>
      <h1>이 책의 이름은 {props.name} 입니다.</h1>
      <h2>이 책은 총{props.numOfPage} 페이지로 이루어져 있습니다.</h2>
    </div>
  );  //리액트 엘리먼트 =  결과물
  
}

export default Book;    //결과물 컨포넌트 내보내기

// =>=>=>=>=> 가장 기본적인 틀