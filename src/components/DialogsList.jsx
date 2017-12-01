import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

//It should return list with add and delete buttons
//edit would be called by clicking on list item
//list will contain icon (status finished or not finished)
//check performed - 1st item does not have to be mapped,
// all others have to be linked to other items (unless have flag "final item")
export default class DialogsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [1, 2, 3, 4, 5] };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div id="container">
      <h2>Dialogs List</h2>
      <div className="dialogsList">
      <span className={"glyphicon glyphicon-plus dialogItemListAddButton"}></span>
      <br></br>
      <NumberList numbers={this.state.items} delete={this.deleteItem} />,
      </div>
      </div>
    );
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li className="list-group-item" key={number}>
    {number}
    <span className={"glyphicon glyphicon-minus deleteButton"} > </span>
    </li>
  );
  return (
    <ul className="list-group" >{listItems}</ul>
  );
}  
