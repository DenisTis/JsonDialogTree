import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

import NavigationBar from './NavigationBar.jsx';

export default class RootPage extends React.Component {
  render() {
    return (
      <div id="container">
        <div>
          <h3 className="text-center">Projects</h3>
        </div>
        <NavigationBar />
      </div >
    );
  }
}
