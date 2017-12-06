import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

import DialogContext from '../DialogContext.js';
//State and context should be passed from upper component
export default class EvaluationeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Evaluations {this.props.evaluations}</h4>
      </div>
    );
  }
}
