import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardsList';
import Card from '../components/Card';
import Deck from '../components/Deck';
import { requestCardsData } from '../actions/data';


export class DeckContainer extends React.Component {

  componentDidMount () {
    this.props.requestCardsData();
  }

  render() {
    return (
      <Deck>
        <CardList>
          {
            this.props.whiteCards && 
            this.props.whiteCards.slice(0,20).map((card, i) =>
              <Card key={i}>{card}</Card>)
          }
        </ CardList> 
        <CardList>
        {
          this.props.blackCards && 
          this.props.blackCards.slice(0,20).map(({text, pick}, i) =>
            <Card key={i}>{text} {pick}</Card>)
        }
        </ CardList> 
    </Deck>
    )
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    requestCardsData: () => dispatch(requestCardsData())
  }
}

const mapStateToProps = (state) => ({
  whiteCards: state.data.whiteCards,
  blackCards: state.data.blackCards
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer)