import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

import MessageList from './MessageList.jsx';
import ChoiceList from './ChoiceList.jsx';
import EvaluationList from './EvaluationList.jsx';
import DialogContext from '../DialogContext.js';
let dialogContext = new DialogContext();

//It should return list with add and delete buttons
//edit would be called by clicking on list item
//list will contain icon (status finished or not finished)
//check performed - 1st item does not have to be mapped,
// all others have to be linked to other items (unless have flag "final item")
//TODO - try to rewrite code considering this example:
//https://gitlab.com/tyler.johnson/react-items-list/blob/master/components/list.js
export default class DialogsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: dialogContext.getItems(),
      messages: "Test message",
      choices: "Test choices",
      evaluations: "test evaluations"
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem.bind(this);
  }

  deleteItem(itemKey) {
    dialogContext.deleteItem(itemKey);
    this.setState({ items: dialogContext.getItems() });
  }

  addItem() {
    dialogContext.addItem("New item");
    this.setState({ items: dialogContext.getItems() });
  }

  setSelectedItem(itemKey) {
    dialogContext.setSelectedItem(itemKey);
    this.setState({ items: dialogContext.getItems() });
  }

  changeItemMode(itemKey) {
    dialogContext.setSelectedItem(itemKey);
    dialogContext.changeItemMode(itemKey);
    this.setState({ items: dialogContext.getItems() });
  }

  updateItem(itemKey, event) {
    if (event.key === 'Enter') {
      dialogContext.updateItem(itemKey, event.target.value);
      this.changeItemMode(itemKey);
    }
  }

  render() {
    return (
      <div className="row">
        {/* left side of the screen */}
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-8">
              <h4>Dialogs List</h4>
            </div>
            <div className="col-sm-4">
              <span className={"glyphicon glyphicon-plus dialogItemListAddButton"} onClick={this.addItem.bind(this)}></span>
            </div>
          </div>
          <br></br>
          <NumberList items={this.state.items}
            updateItem={this.updateItem.bind(this)}
            setSelectedItem={this.setSelectedItem.bind(this)}
            changeItemMode={this.changeItemMode.bind(this)}
            deleteItem={this.deleteItem.bind(this)} />
        </div>
        {/* middle side of screen */}
        <div className="col-sm-4">
        <MessageList dialogContext={dialogContext} messages={this.state.messages} />
        <br></br>
        <ChoiceList choices={this.state.choices} />
        </div>
        <div className="col-sm-4">
        <EvaluationList dialogContext={dialogContext} evaluations={this.state.evaluations} />
        </div>
        
      </div>
    );
  }
}

function NumberList(props) {
  const listItems = [];
  for (let item of props.items) {
    listItems.push(
      <li className="list-group-item" key={item.key}>
        <span className={item.isSelected ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked"} onClick={() => props.setSelectedItem(item.key)}> </span>
        {
          item.isEdit &&
          <input type="text" name="name" defaultValue={item.content}
            onKeyPress={props.updateItem.bind(this, item.key)} />
        }
        {!item.isEdit &&
          <span onClick={() => props.changeItemMode(item.key)} >
            {item.content}
          </span>
        }
        <span className={"glyphicon glyphicon-minus deleteButton"} onClick={() => props.deleteItem(item.key)}> </span>
      </li>
    );
  };
  return (
    <ul className="list-group" >{listItems}</ul>
  );
}  
