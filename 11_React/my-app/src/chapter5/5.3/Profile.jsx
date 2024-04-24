

function Profile(props) {
  console.log(props);
  return(
    <>
    <h1>사용자 프로필(조회수:{props.viewCount})</h1>
    <h2>이름: {props.name}</h2>
    <h3>자기소개: {props.introduction}</h3>
    </>
  );
}

export default Profile;