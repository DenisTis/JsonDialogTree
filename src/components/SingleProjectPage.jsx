import React from "react";

import "../../styles.css";
import Root from "./RootPage.jsx";
import DialogsList from "./DialogsList.jsx";
import DialogContext from "../DialogContext.js";

export default class SingleProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.dialogContext = new DialogContext();
    this.state = {
      editMode: true,
      projectName: this.dialogContext.projectName,
      dialogItems: this.dialogContext.getItems()
    };
  }

  changeMode() {
    let newMode = (this.state.editMode) ? false : true;
    this.setState({ editMode: newMode });
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      this.changeMode();
    }
  }

  changeProjectName(event) {
    this.setState({ projectName: event.target.value });
  }

  loadProject() {
    this.dialogContext.load();
    this.setState({ dialogItems: this.dialogContext.getItems() });
  }

  render() {
    return (
      <div>
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
          <span id="editProjectName" className={"glyphicon glyphicon-edit"} onClick={this.changeMode.bind(this)}></span>
          <span id="loadProject" className={"glyphicon glyphicon-open"} onClick={this.loadProject.bind(this)}></span>
          <span id="saveProject" className={"	glyphicon glyphicon-save"} onClick={this.dialogContext.save.bind(this.dialogContext)}></span>
        </div >
        <div>
          <DialogsList dialogContext={this.dialogContext} dialogItems={this.state.dialogItems} />
        </div>
      </div >
    );
  }
}
