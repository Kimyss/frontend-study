import { useLocation, useSearchParams } from "react-router-dom";

function AboutPage() {

  // 실습 1 
  const location =  useLocation();
  console.log(location);  // -> Location객체 search부분이 쿼리스트링 부분

  // 실습 2
  // 첫번째 요소는 쿼리스트링을 조회하거나 수정하는 메서드가 담긴 객체를 반환
  const [searchParams, setSerchParams] =  useSearchParams();
  const name =  searchParams.get('name');
  const age = searchParams.get('age');

  return (
    <>
    <h1>쿼리스트링 사용</h1>
    <h3>1. useLocation</h3>
    <p>{location.search}</p>
    <hr />
    <h3>2. useSearchParams</h3>
    <p>name : {name}</p>
    <p>age : {age}</p>
    </>
  );
};

export default AboutPage;