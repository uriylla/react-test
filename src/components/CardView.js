import React from 'react'
import Card from '../blocks/Card';
import isInt from 'validator/lib/isInt';

export default class CardView extends React.Component {

  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onPickChange = this.onPickChange.bind(this);
    this.state = {
      ...props,
      isBlack: props.pick !== undefined
    }
  }

  isEditable () {
    return this.state.editing || this.state.adding;
  }

  onTextChange (e) {
    const value = e.currentTarget.value;
    this.setState((state) => ({
      text: value
    }))    
  }

  onPickChange (e) {
    const value = e.currentTarget.value;
    this.setState((state) => ({
      pick: isInt(value) ? value : ''
    }))    
  }

  render() {
    return (
      <Card>
        <Card.Text onChange={this.onTextChange} editable={this.isEditable()} value={this.state.text} type="text" />
        {this.state.isBlack &&
          <Card.Pick onChange={this.onPickChange} editable={this.isEditable()} value={this.state.pick} maxLength={1} type="text" />}
      </Card>
    )
  }
}