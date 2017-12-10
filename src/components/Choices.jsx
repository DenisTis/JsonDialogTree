import React from "react";
import PropTypes from "prop-types";

import "../../styles.css";

//State and context should be passed from upper component

/* Here I faced re-render problem for input with attribute "defaultValue"
This attribute is only rendered once and does not change at later re-render
React proposes to use "Controlled component"
 */
export default class Choices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { choices: props.dialogContext.getChoices() };
  }

  static get propTypes() {
    return {
      dialogContext: PropTypes.object,
      deleteChoice: PropTypes.func
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ choices: nextProps.dialogContext.getChoices() });
  }

  updateChoice(event) {
    let dataKey = event.target.attributes["data-key"].value;
    if (event.target.type === "checkbox") {
      this.props.dialogContext.updateChoice(dataKey, event.target.name, event.target.checked);
    } else {
      this.props.dialogContext.updateChoice(dataKey, event.target.name, event.target.value);
    }
    this.setState({ messages: this.props.dialogContext.getChoices() });
  }

  render() {
    let items = this.props.dialogContext.getChoices();
    let listItems = [];
    if (!items) {
      return false;
    }

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      listItems.push(
        <li className="list-group-item" key={item.key}>
          <div className="row">
            {/* <div className="col-sm-1">
              <span className={"glyphicon glyphicon-picture"}> </span>
            </div> */}
            <div className="col-sm-10">
              <span>
                <label>
                  Final<input type="checkbox" data-key={item.key} name="isFinal" checked={this.state.choices[i].isFinal} onChange={this.updateChoice.bind(this)} />
                </label>
                <label>
                  Text<input type="text" data-key={item.key} name="textId" value={this.state.choices[i].textId} onChange={this.updateChoice.bind(this)} />
                </label>
              </span>
            </div>
            <div className="col-sm-1">
              <span
                className={"glyphicon glyphicon-minus deleteButton"}
                onClick={() => this.props.deleteChoice(item.key)}
              />
            </div>
          </div>
        </li>
      );
    }
    return <ul className="list-group">{listItems}</ul>;
  }
}