
const students = [
  {
    id: '1',
    name: '김재현',
    email: 'geoblo@naver.com'
  },
  {
    id: '2',
    name: '유재석',
    email: 'you@example.com'
  },
  {
    id: '3',
    name: '이이경',
    email: '22kyung@example.com'
  },
  {
    id: '4',
    name: '이미주',
    email: 'joo@example.com'
  }
];

// 출석부 컴포넌트 
function AttendanceBook() {
  
  return (
    <ul>
      {/* Quiz: 배열을 반복 렌더링 해보기 */}
    {/* {students.map((value, index)=>{
      return <li key = {value.id}>{value.name} ({value.email})</li>; */}
    {/* map함수 index생략해도되는듯 */}
    {students.map(value=>{ return <li key = {value.id}>{value.name} ({value.email})</li>;
    

    })}
    </ul>
  );
};

export default AttendanceBook;