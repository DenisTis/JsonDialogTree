import React from "react";
import PropTypes from "prop-types";

import "../../styles.css";

import Messages from "./Messages.jsx";

//State and context should be passed from upper component
export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.dialogContext = this.props.dialogContext;
    this.state = { messages: this.props.items };
  }

  static get propTypes() {
    return {
      dialogContext: PropTypes.object,
      items: PropTypes.array
    };
  }

  addMessage() {
    this.dialogContext.addMessage();
    this.setState({ messages: this.dialogContext.getMessages() });
  }

  editMessage(key) {
    console.log(key);
  }

  deleteMessage(key) {
    this.dialogContext.deleteMessage(key);
    this.setState({ messages: this.dialogContext.getMessages() });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <h4>Messages List</h4>
          </div>
          <div className="col-sm-4">
            <span
              className={"glyphicon glyphicon-plus dialogItemListAddButton"}
              onClick={this.addMessage.bind(this)}
            />
          </div>
        </div>
        <Messages
          deleteMessage={this.deleteMessage.bind(this)}
          items={this.dialogContext.getMessages()}
        />
      </div>
    );
  }
}