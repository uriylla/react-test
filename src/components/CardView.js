import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import isInt from 'validator/lib/isInt';

import CardViewButtons from './CardViewButtons';
import Card from '../blocks/Card';
import Pick from '../blocks/Pick';
import P from '../elements/P';

import { addCard, editCard, removeCard, } from '../actions/cards';
import { getCardById } from '../selectors/cards';


export class CardView extends React.Component {

  constructor(props) {
    super(props);
    const {id, text, pick} = props;
    this.onTextChange = this.onTextChange.bind(this);
    this.onPickChange = this.onPickChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleApplyClick = this.handleApplyClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.state = {
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
    addCard({ text, pick });
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

  handleRemoveClick () {
    const { history: { push }, removeCard } = this.props;
    removeCard(this.props.id);
    push('/');
  }

  handleCardClick () {
    const { history: { push }, id, isPreview } = this.props;
    isPreview && push(`/card/${id}`);
  }

  render() {
    return (
      <Card isBlack={this.isBlack()} isPreview={this.props.isPreview} onClick={this.handleCardClick}>
        <Card.Text
          onChange={this.onTextChange}
          editable={this.isEditable()}
          isBlack={this.isBlack()}
          disabled={!this.isEditable()}
          focus={!this.isEditable()}
          value={this.props.isPreview ? this.props.text : this.state.text}/>
          {(this.isBlack() || this.isEditable()) && !this.props.isPreview &&
          <Pick>
            <P>Pick </P>
            <Pick.Value
              onChange={this.onPickChange}
              disabled={!this.isEditable()}
              isBlack={this.isBlack()}
              editable={this.isEditable()}
              value={this.props.isPreview ? this.props.pick: this.state.pick}
              maxLength={1}
              type="text" />
          </Pick>}        
          {!this.props.isPreview && 
          <CardViewButtons
            adding={this.state.adding}
            editing={this.state.editing}
            isBlack={this.isBlack()}
            handleAddClick={this.handleAddClick}
            handleEditClick={this.handleEditClick}
            handleApplyClick={this.handleApplyClick}
            handleRemoveClick={this.handleRemoveClick}
          />}
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCard: card => dispatch(addCard(card)),
  editCard: card => dispatch(editCard(card)),
  removeCard: (id) => dispatch(removeCard(id))
});

const mapStateToProps = (state, props ) => {
  const id = props.match && props.match.params.id;
  const card = getCardById(state.cards, id);
  return { ...card };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardView));