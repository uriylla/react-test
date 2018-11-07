import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardsList';
import { requestCardsData } from '../actions/data';

export class Deck extends React.Component {

  componentDidMount () {
    this.props.requestCardsData();
  }

  render() {
    return (
      <CardList>
        cards
      </ CardList> 
    )
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    requestCardsData: () => dispatch(requestCardsData())
  }
}

const mapStateToProps = (state) => ({
  state
})
export default connect(undefined, mapDispatchToProps)(Deck)