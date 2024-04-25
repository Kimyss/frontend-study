import React from 'react';
import Avatar from './Avatar';
import Userinfo from './Userinfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

function CommentEx(props) {
  return (
    <>
      {/* 원본 */}
      <div className="comment">
        <div className="user-info">
          <img className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
          />
          <div className="user-info-name">
            {props.user.name}
          </div>
        </div>

        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>

      {/* step 1: Avatar.jsx 추출
        아바타 이미지를 컴포넌트로 추출
        아바타 이미지는 댓글, 사용자 정보창 등 
        여기저기에 쓰일 수 있으므로
        */}
      <div className="comment">
        <div className="user-info">
        <Avatar user = {props.user}/>
          <div className="user-info-name">
            {props.user.name}
          </div>
        </div>

        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>

        {/* step 2: 사용자 정보를 컴포넌트로 추출 
         사용자 정보도 여기저기서 쓰일 수 있음*/}
      <div className="comment">
      <Userinfo user = {props.user} />
        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {formatDate(props.date)}
        </div>
      </div>

    </>
  );
}

export default CommentEx;