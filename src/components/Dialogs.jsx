import React from 'react';
import s from '../styles/Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let newMessageBody = props.newMessageBody;
  let dialogsElement = state.dialogsData.map((item) => (
    <DialogItem id={item.id} name={item.name} />
  ));

  let messagesElement = state.messagesData.map((d) => <Message id={d.id} message={d.message} />);

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.updateMessageBodyText(body);
  };
  if(props.isAuth === false) return <Navigate to="/login" />;
  return (
    <div className={s.dialogsSection}>
      <div className={s.dialogs}>
        {dialogsElement}
        {/*<DialogItem name="Andrey" id="1" />
        <DialogItem name="Natali" id="2" />
        <DialogItem name="Vasyl" id="3" />
        <DialogItem name="Artem" id="4" />*/}
      </div>
      <div className={s.messages}>
        {messagesElement}
        {/*<Message massage="Hi" />
        <Message massage="What you want to order?" />
      <Message massage="Yoo" />*/}
      </div>
      <div>
        <textarea
          onChange={onMessageChange}
          value={newMessageBody}
          placeholder="Enter your message"
        />
        <button onClick={addMessage}>Add post</button>
      </div>
    </div>
  );
};

export default Dialogs;
