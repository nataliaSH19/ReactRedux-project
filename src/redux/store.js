import profileReducer from './profile-reducer';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'My first post', likesCount: 15 },
      ],
      newPostText: 'it',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Natali' },
        { id: 3, name: 'Vasyl' },
        { id: 4, name: 'Artem' },
      ],
      messagesData: [
        { id: 1, message: 'yoo' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Are you working now?' },
        { id: 4, message: 'Nice to meet you' },
      ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderTree() {
    console.log('changed');
  },
  subscribe(observer) {
    this.rerenderTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this.rerenderTree(this._state);
    /*if (action.type === 'ADD_POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this.rerenderTree(this._state);
    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this.rerenderTree(this._state);
    }*/
  },
};


export default store;
