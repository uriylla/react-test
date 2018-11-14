import React from 'react'
import Card from '../blocks/Card';
import Button from '../elements/Button';
import isInt from 'validator/lib/isInt';

export default class CardView extends React.Component {

  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onPickChange = this.onPickChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleApplyClick = this.handleApplyClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
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
    this.setState((state) => ({ text: value }))    
  }

  onPickChange (e) {
    const value = e.currentTarget.value;
    this.setState((state) => ({ pick: isInt(value) ? value : '' }))    
  }

  handleAddClick () {
    console.log('add card');  
  }

  handleApplyClick () {
    console.log('save changes');
  }

  handleEditClick () {
    this.setState((state) => ({ adding: false, editing: true }))   
  }

  render() {
    return (
      <Card>
        <Card.Text onChange={this.onTextChange} editable={this.isEditable()} value={this.state.text} type="text" />
        {this.state.isBlack &&
          <Card.Pick onChange={this.onPickChange} editable={this.isEditable()} value={this.state.pick} maxLength={1} type="text" />}
        {this.state.adding && 
          <Button onClick={this.handleAddClick} primary>Add</Button>}
        {this.state.editing && 
          <Button onClick={this.handleApplyClick} secondary>Apply</Button>}
        {!this.isEditable() && !this.props.isPreview &&
          <Button onClick={this.handleEditClick} secondary>Edit</Button>}
      </Card>
    )
  }
}