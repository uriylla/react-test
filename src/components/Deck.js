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
  justify-content: space-around;
  margin: 0 auto;
  max-width: 80vw;
  min-height: 20vh;
  margin-top: 70px;
`

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: #232323;
  z-index: 2;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 70px;
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
      <div style={{width: '100%', height: '100vh', overflow: 'scroll', overflowX: 'hidden', backgroundColor: '#232323'}}>
        <HeaderWrapper>
          <H1>Card Game Maker</H1>
          <div style={{display: 'flex'}}>
            <Button inverse onClick={this.addNewCard}>New Card</Button>
            <Button inverse onClick={this.fetchCah}>Fetch original CAH cards</Button>
            <Button inverse onClick={this.clearDeck}>Clear Deck</Button>
          </div>
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