import React from 'react';
import s from '../styles/MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((item) => (
    <Post message={item.message} likeCount={item.likesCount} id={item.id} />
  ));
  const buttonRef = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = buttonRef.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.postBlock}>
      <h3>my posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={buttonRef} value={props.newPostText}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
