import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

export default class RootPage extends React.Component {
  constructor(props) {
    super(props);
//    this.state = {language: Context.language};
    //If this is not done, setState would not be recognized in changeLanguage method
//    this.changeLanguage = this.changeLanguage.bind(this);
}  
//   changeLanguage(event) {
// //    this.setState({ "language": languageKey });      
//   }

  render() {
    return (
       <div id="container">
       <h1>Projects</h1>
        {/* <div class="btn-toolbar toolbarTopRight" aria-label="Language selection" onClick={this.changeLanguage}> </div> */}
      </div >
    );
  }
}
