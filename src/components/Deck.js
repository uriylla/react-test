import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WhiteCards from '../components/WhiteCards';
import BlackCards from '../components/BlackCards';
import { requestCardsData } from '../actions/data';

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
    props.requestCardsData();
  }

  render() {
    return (
      <DeckWrapper>
        {<WhiteCards />}
        {<BlackCards />}
      </DeckWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestCardsData: () => dispatch(requestCardsData())
  }
}

export default connect(undefined, mapDispatchToProps)(Deck)