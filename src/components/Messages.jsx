import React from "react";
import PropTypes from "prop-types";

import "../../styles.css";

//State and context should be passed from upper component
export default class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      items: PropTypes.array,
      deleteMessage: PropTypes.func
    };
  }

  render() {
    const items = this.props.items;
    const listItems = [];
    if (!this.props.items) {
      return false;
    }

    for (let item of items) {
      listItems.push(
        <li className="list-group-item" key={item.key}>
          <div className="row">
            {/* <div className="col-sm-1">
              <span className={"glyphicon glyphicon-picture"}> </span>
            </div> */}
            <div className="col-sm-10">
              <span>
                <label>
                  Character<input
                    type="text"
                    name="character"
                    defaultValue={item.character}
                  />
                </label>
                <label>
                  Text<input type="text" name="text" defaultValue={item.textId} />
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