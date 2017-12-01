import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"btn-toolbar"}>
        <Link to="/project">
          <button type="button" className={"btn"}>
            <span className={"glyphicon glyphicon-plus"}></span> New Project
          </button>
        </Link>
        <button type="button" className={"btn"}>
          <span className={"glyphicon glyphicon-import"}></span> Import
        </button>
        <button type="button" className={"btn"}>
          <span className={"glyphicon glyphicon-export"}></span> Export
        </button>
        <button type="button" className={"btn"}>
          <span className={"glyphicon glyphicon-export"}></span> Export
        </button>
        <button type="button" className={"btn"}>
          <span className={"glyphicon glyphicon-play-circle"}></span> Test
        </button>
      </div>
    );
  }
}
