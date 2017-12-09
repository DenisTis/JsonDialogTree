import React from "react";
import PropTypes from "prop-types";
import "../../styles.css";

export default class Dialogs extends React.Component {
  constructor(props) {
    super(props);
    this.dialogContext = this.props.dialogContext;
  }
  static get propTypes() {
    return {
      dialogContext: PropTypes.object,
      items: PropTypes.array,
      updateStateItems: PropTypes.func
    };
  }

  deleteItem(itemKey) {
    this.dialogContext.deleteItem(itemKey);
    this.props.updateStateItems(this.dialogContext.getItems());
  }

  setSelectedItem(itemKey) {
    this.dialogContext.setSelectedItem(itemKey);
    this.props.updateStateItems(this.dialogContext.getItems());
  }

  changeItemMode(itemKey) {
    this.dialogContext.setSelectedItem(itemKey);
    this.dialogContext.changeItemMode(itemKey);
    this.props.updateStateItems(this.dialogContext.getItems());
  }

  updateItem(itemKey, event) {
    if (event.key === "Enter") {
      this.dialogContext.updateItem(itemKey, event.target.value);
      this.changeItemMode(itemKey);
    }
  }

  render() {
    const listItems = [];
    for (let item of this.props.items) {
      listItems.push(
        <li className="list-group-item" key={item.key}>
          <span className={item.isSelected ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked"} onClick={() => this.setSelectedItem(item.key)}> </span>
          {
            item.isEdit &&
            <input type="text" name="name" defaultValue={item.content}
              onKeyPress={this.updateItem.bind(this, item.key)} />
          }
          {!item.isEdit &&
            <span onClick={() => this.changeItemMode(item.key)} >
              {item.content}
            </span>
          }
          <span className={"glyphicon glyphicon-minus deleteButton"} onClick={() => this.deleteItem(item.key)}> </span>
        </li>
      );
    }
    return (
      <ul className="list-group" >{listItems}</ul>
    );

  }
}
