import React from "react";
import "../../styles.css";

export default class ChoiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Dialog Choices {this.props.choices}</h4>
      </div>
    );
  }
}
