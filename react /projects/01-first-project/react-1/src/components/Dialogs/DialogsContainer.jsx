import { compose } from "redux";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import { withAuthNavigate } from "../hoc/withAuthNavigate";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);
