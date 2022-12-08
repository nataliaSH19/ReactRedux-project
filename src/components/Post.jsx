import React from 'react';
import s from '../styles/Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        alt="photoS"
        src="https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg"
      />
      {props.message}
      <div>likes: {props.likeCount}</div>
    </div>
  );
};

export default Post;
