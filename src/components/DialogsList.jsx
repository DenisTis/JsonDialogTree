import React from "react";
import PropTypes from "prop-types";
import "../../styles.css";

import MessageList from "./MessageList.jsx";
import ChoiceList from "./ChoiceList.jsx";
import EvaluationList from "./EvaluationList.jsx";
import Dialogs from "./Dialogs.jsx";

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
    this.dialogContext = this.props.dialogContext;
    this.state = {
      items: this.dialogContext.getItems(),
      messages: "Test message",
      choices: "Test choices",
      evaluations: "test evaluations"
    };
    this.addItem.bind(this);
  }

  static get propTypes() {
    return {
      dialogContext: PropTypes.object
    };
  }


  addItem() {
    this.dialogContext.addItem("New item");
    this.setState({ items: this.dialogContext.getItems() });
  }

  updateStateItems(newItems) {
    this.setState({ items: newItems });
  }

  render() {
    let dialogItems = this.dialogContext.getItems();
    return (
      <div className="row">
        {/* left side of the screen */}
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-8">
              <h4>Dialogs</h4>
            </div>
            <div className="col-sm-4">
              <span className={"glyphicon glyphicon-plus dialogItemListAddButton"} onClick={this.addItem.bind(this)}></span>
            </div>
          </div>
          <br></br>
          <Dialogs items={dialogItems} dialogContext={this.dialogContext} updateStateItems={this.updateStateItems.bind(this)} />
        </div>
        {/* middle side of screen */}
        <div className="col-sm-4">
          <MessageList dialogContext={this.dialogContext} messages={this.state.messages} />
          <br></br>
          <ChoiceList dialogContext={this.dialogContext} choices={this.state.choices} />
        </div>
        <div className="col-sm-4">
          <EvaluationList dialogContext={this.dialogContext} evaluations={this.state.evaluations} />
        </div>
      </div>
    );
  }
}