import React from "react";
import PropTypes from "prop-types";

import "../../styles.css";

//State and context should be passed from upper component

/* Here I faced re-render problem for input with attribute "defaultValue"
This attribute is only rendered once and does not change at later re-render
React proposes to use "Controlled component"
 */
export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.dialogContext.getMessages() };
  }

  static get propTypes() {
    return {
      dialogContext: PropTypes.object,
      deleteMessage: PropTypes.func
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ messages: nextProps.dialogContext.getMessages() });
  }

  updateMessage(event) {
    let dataKey = event.target.attributes["data-key"].value;
    this.props.dialogContext.updateMessage(dataKey, event.target.name, event.target.value);
    this.setState({ messages: this.props.dialogContext.getMessages() });
  }

  render() {
    let items = this.props.dialogContext.getMessages();
    let listItems = [];
    if (!items) {
      return false;
    }

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      //    }
      //for (let item of items) {
      console.log(JSON.stringify(item));
      listItems.push(
        <li className="list-group-item" key={item.key}>
          <div className="row">
            {/* <div className="col-sm-1">
              <span className={"glyphicon glyphicon-picture"}> </span>
            </div> */}
            <div className="col-sm-10">
              <span>
                <label>
                  Character<input type="text" data-key={item.key} name="character" value={this.state.messages[i].character} onChange={this.updateMessage.bind(this)} />
                </label>
                <label>
                  Text<input type="text" data-key={item.key} name="textId" value={this.state.messages[i].textId} onChange={this.updateMessage.bind(this)} />
                </label>
              </span>
            </div>
            <div className="col-sm-1">
              <span
                className={"glyphicon glyphicon-minus deleteButton"}
                onClick={() => this.props.deleteMessage(item.key)}
              />
            </div>
          </div>
        </li>
      );
    }
    return <ul className="list-group">{listItems}</ul>;
  }
}