import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBodyText: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
