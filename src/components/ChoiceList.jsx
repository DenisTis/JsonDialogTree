import React from "react";
import PropTypes from "prop-types";

import "../../styles.css";

import Choices from "./Choices.jsx";

export default class ChoiceList extends React.Component {
  constructor(props) {
    super(props);
    this.dialogContext = this.props.dialogContext;
    this.state = { choices: this.dialogContext.getChoices() };
  }

  static get propTypes() {
    return {
      dialogContext: PropTypes.object
    };
  }

  addChoice() {
    this.dialogContext.addChoice();
    this.setState({ choices: this.dialogContext.getChoices() });
  }

  deleteChoice(key) {
    this.dialogContext.deleteChoice(key);
    this.setState({ choices: this.dialogContext.getChoices() });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <h4>Dialog Choices</h4>
          </div>
          <div className="col-sm-4">
            <span
              className={"glyphicon glyphicon-plus dialogItemListAddButton"}
              onClick={this.addChoice.bind(this)}
            />
          </div>
        </div>
        <Choices
          deleteChoice={this.deleteChoice.bind(this)}
          dialogContext={this.props.dialogContext}
        />
      </div>
    );
  }
}