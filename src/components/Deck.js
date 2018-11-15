import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestCardsData } from '../actions/data';
import { clearDeck } from '../actions/cards';

import styled from 'styled-components';

import WhiteCards from '../components/WhiteCards';
import H1 from '../elements/H1';
import BlackCards from '../components/BlackCards';
import Button from '../elements/Button';

const DeckWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 80vw;
  min-height: 20vh;
  height: 100%;
  background-color: whitesmoke;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80vw;
  height: 40px;
`

export class Deck extends React.Component {

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
      <div>
        <HeaderWrapper>
          <Button onClick={this.addNewCard}>New Card</Button>
          <H1>Card Game Maker</H1>
          <Button onClick={this.fetchCah}>Fetch original CAH cards</Button>
          <Button onClick={this.clearDeck}>Clear Deck</Button>
        </HeaderWrapper>
        <DeckWrapper>
          <WhiteCards />
          <BlackCards />
        </DeckWrapper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestCardsData: () => dispatch(requestCardsData()),
    clearDeck: () => dispatch(clearDeck())
  }
}

export default connect(undefined, mapDispatchToProps)(withRouter(Deck))