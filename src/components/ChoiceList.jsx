import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles.css';

import DialogContext from '../DialogContext.js';
//State and context should be passed from upper component
export default class ChoiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Choices {this.props.choices}</h4>
      </div>
    );
  }
}
