import React from "react";
import PropTypes from "prop-types";

import "../../styles.css";

import Messages from "./Messages.jsx";

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.dialogContext = this.props.dialogContext;
    this.state = { messages: this.dialogContext.getMessages() };
  }

  static get propTypes() {
    return {
      dialogContext: PropTypes.object
    };
  }

  addMessage() {
    this.dialogContext.addMessage();
    this.setState({ messages: this.dialogContext.getMessages() });
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
            <h4>Dialog Messages</h4>
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
          dialogContext={this.props.dialogContext}
        />
      </div>
    );
  }
}