import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WhiteCards from '../components/WhiteCards';
import { withRouter } from 'react-router';
import BlackCards from '../components/BlackCards';
import { requestCardsData } from '../actions/data';
import Button from '../elements/Button';

const DeckWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 80vw;
  height: 90vh;
  background-color: whitesmoke;
`
export class Deck extends React.Component {

  constructor (props) {
    super(props);
    this.addNewCard = this.addNewCard.bind(this);
    props.requestCardsData();
  }

  addNewCard () { this.props.history.push('/add') };

  render() {
    return (
      <div>
        <DeckWrapper>
          <WhiteCards />
          <BlackCards />
        </DeckWrapper>
        <Button onClick={this.addNewCard}>New Card</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestCardsData: () => dispatch(requestCardsData())
  }
}

export default connect(undefined, mapDispatchToProps)(withRouter(Deck))