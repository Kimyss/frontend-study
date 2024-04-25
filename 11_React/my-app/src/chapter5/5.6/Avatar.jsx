import React from 'react';

function Avatar(props) {
  console.log(props);
  return (
    <img className="avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
    style={{
      width : 50,
      height : 50,
      borderRadius: '50%'
    }}
  />
  );
}

export default Avatar;

// rsc/rsf
// import React from 'react';

// const Avatar = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Avatar;