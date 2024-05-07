import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기) 데이터읽어와
// U: Update(수정)
// D: Delete(삭제)

function App() {

  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?',
    '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);  // 아이디값이없어서

  return (
    <>
      <header className="header--dark">
        <h4>Gonilog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>

        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div>

        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by goni.kim</p>
        </div> */}

        {/* Quiz : map()을 이용하여 posts 반복 렌더링하기 */}
        {posts.map((posts, index) => {
          return (
            <div key={index} className='list'
            onClick={()=>{
              setShowPostDetail(true);
              // 리스트를 클릭했을때 콜백함수를 실행
              setCurrentIndex(index);   //id 값이 없으니 index로 - 
              }}>
              <h4>{posts}</h4>
              <p>2023년 1월 20일</p>
              <p>by goni.kim</p>
            </div>
          );    //return문 옆에 써도 되고 이렇게 괄호치고 -
        })}

        {/* 포스트 상세보기 */}
        {/* Quiz 조건부 렌더링 논리연산자 / 삼항연산자 */}
        {showPostDetail && <showPostDetail posts = {posts} currentIndex = {currentIndex}/>}


      </div>
    </>
  );
}

export default App;
