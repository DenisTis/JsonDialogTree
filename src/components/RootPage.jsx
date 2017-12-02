import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

import NavigationBar from './NavigationBar.jsx';

export default class RootPage extends React.Component {
  render() {
    return (
      <div>
        <div className="rootHeader">
        {/* <h3 className="text-center">Projects</h3> */}
          <h3>Projects</h3>
        </div>
        <NavigationBar />
      </div >
    );
  }
}
