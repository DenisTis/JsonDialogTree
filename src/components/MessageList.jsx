import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

import DialogContext from '../DialogContext.js';
//State and context should be passed from upper component
export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.dialogContext = this.props.dialogContext;
    this.state = { messages: this.props.items };
  }

  addMessage() {
    this.dialogContext.addMessage();
    this.setState({ messages: this.dialogContext.getMessages() });
  }

  editMessage(key) {

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
            <span className={"glyphicon glyphicon-plus dialogItemListAddButton"} onClick={this.addMessage.bind(this)}></span>
          </div>
        </div>
        <Messages
          deleteMessage={this.deleteMessage.bind(this)}
          items={this.dialogContext.getMessages()} />
      </div >
    );
  }
}


function Messages(props) {
  const items = props.items;
  const listItems = [];
  if (!props.items) {
    return false;
  }
  let textStyle = {
    "margin-left": "1em"
  };
  for (let item of items) {
    listItems.push(
      <li className="list-group-item" key={item.key}>
        <div className="row">
          <div className="col-sm-1">
            <span className={"glyphicon glyphicon-picture"}> </span>
          </div>
          <div className="col-sm-10">
            <span>
              <label>Character<input type="text" name="character" defaultValue={item.character} /></label>
              <label>Text<input type="text" name="text" defaultValue={item.text} /></label>
            </span>
          </div>
          <div className="col-sm-1">
            <span className={"glyphicon glyphicon-minus deleteButton"} onClick={() => props.deleteMessage(item.key)}> </span>
          </div>
        </div>
      </li>
    );
  };
  return (
    <ul className="list-group" >{listItems}</ul>
  );
}  
