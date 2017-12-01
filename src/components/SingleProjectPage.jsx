import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';
import Root from './RootPage.jsx';
import DialogsList from './DialogsList.jsx';

export default class SingleProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      projectName: "New project"
    };
  }

  changeMode() {
    let newMode = (this.state.editMode) ? false : true;
    this.setState({ editMode: newMode });
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.changeMode();
    }
  }

  changeProjectName(event) {
    this.setState({ projectName: event.target.value });
  }

  render() {
    return (
      <div id="container">
        <div>
          <Root />
        </div>
        <div className={"projectHeader"}>
          Project name:
              {this.state.editMode &&
            <input type="text" name="name" defaultValue={this.state.projectName}
            onKeyPress={this.onKeyPress.bind(this)}
             onChange={this.changeProjectName.bind(this)} />
          }
          {!this.state.editMode &&
            <span className="">{this.state.projectName}</span>
          }
          <span className={"glyphicon glyphicon-pencil"} onClick={this.changeMode.bind(this)}></span>
        </div >
        <div>
          <DialogsList />
        </div>
      </div >
    );
  }
}
