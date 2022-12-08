const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 5, message: body }],
      };
      
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state ,
        newMessageBody : action.body
      };
      
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: body,
  };
};

export default dialogsReducer;
