import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestCardsData } from '../actions/data';
import { clearDeck } from '../actions/cards';

import styled from 'styled-components';

import WhiteCards from '../components/WhiteCards';
import BlackCards from '../components/BlackCards';
import Button from '../elements/Button';

export const DeckWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  min-height: 20vh;
  padding-top: 70px;
`

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
      <div style={{position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#232323'}}>
        <HeaderWrapper>
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
};

export default connect(undefined, mapDispatchToProps)(withRouter(Deck));