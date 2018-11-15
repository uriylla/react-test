import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import isInt from 'validator/lib/isInt';
import uniqid from 'uniqid';

import Card from '../blocks/Card';
import Button from '../elements/Button';

import { addCard, editCard } from '../actions/cards';
import { getCardById } from '../selectors/cards';


export class CardView extends React.Component {

  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onPickChange = this.onPickChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleApplyClick = this.handleApplyClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.state = {
      text: '',
      pick: '',
      ...props
    }
  }

  isEditable () { return this.state.editing || this.state.adding; }

  isBlack () { return !!this.state.pick }

  onTextChange (e) {
    const value = e.currentTarget.value;
    this.setState((state) => ({ text: value }));  
  }

  onPickChange (e) {
    const value = e.currentTarget.value;
    this.setState((state) => ({ pick: isInt(value) ? value : '' }));
  }

  handleAddClick () {
    const { history: { push }, addCard } = this.props;
    const { text, pick } = this.state;
    addCard({
      id: uniqid(),
      text,
      pick
    });
    push('/');
  }

  handleApplyClick () {
    const { text, pick } = this.state;
    const { history: { push }, id, editCard } = this.props;
    editCard({ id, text, pick });
    push('/');
  }

  handleEditClick () {
    this.setState((state) => ({ adding: false, editing: true }));
  }

  handleCardClick () {
    const { history: { push }, id, isPreview } = this.props;
    isPreview && push(`/card/${id}`);
  }

  render() {
    return (
      <Card onClick={this.handleCardClick}>
        <Card.Text
          onChange={this.onTextChange}
          editable={this.isEditable()}
          disabled={!this.isEditable()}
          value={this.props.isPreview ? this.props.text : this.state.text}
          type="text" />
        {(this.isBlack() || this.isEditable()) &&
          <Card.Pick
            onChange={this.onPickChange}
            editable={this.isEditable()}
            value={this.props.isPreview ? this.props.pick: this.state.pick}
            maxLength={1}
            type="text" />}
        {this.state.adding && 
          <Button
            onClick={this.handleAddClick}
            primary>
              Add
          </Button>}
        {this.state.editing && 
          <Button
            onClick={this.handleApplyClick}
            secondary>Apply
          </Button>}
        {!this.isEditable() && !this.props.isPreview &&
          <Button
            onClick={this.handleEditClick}
            secondary>Edit
          </Button>}
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCard: card => dispatch(addCard(card)),
  editCard: card => dispatch(editCard(card)),
});

const mapStateToProps = (state, props ) => {
  const id = props.match && props.match.params.id;
  const card = getCardById(state.cards, id);
  return { ...card };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardView));