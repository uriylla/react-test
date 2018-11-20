import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestCardsData } from '../actions/data';
import { clearDeck } from '../actions/cards';

import styled from 'styled-components';
import Button from '../elements/Button';


export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  background-color: #232323;
  z-index: 2;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 70px;
`

export class Header extends React.Component {

  constructor (props) {
    super(props);
    this.addNewCard = this.addNewCard.bind(this);
    this.fetchCah = this.fetchCah.bind(this);
    this.clearDeck = this.clearDeck.bind(this);
  }

  addNewCard () { this.props.history.push('/add') };

  fetchCah () { this.props.requestCardsData() };

  clearDeck () { this.props.clearDeck() };

  render() {
    return (
      <HeaderWrapper>
          <Button inverse onClick={this.addNewCard}>New Card</Button>
          <Button inverse onClick={this.fetchCah}>Fetch original CAH cards</Button>
          <Button inverse onClick={this.clearDeck}>Clear Deck</Button>
      </HeaderWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestCardsData: () => dispatch(requestCardsData()),
    clearDeck: () => dispatch(clearDeck())
  }
};

export default connect(undefined, mapDispatchToProps)(withRouter(Header));