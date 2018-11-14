import { connect } from 'react-redux';
import CardsList from './CardsList';

const mapStateToProps = state => {
  const whiteCards = state.data.whiteCards && state.data.whiteCards.map(text => ({text}))
  return { cards: whiteCards } 
}

export default connect(mapStateToProps)(CardsList);
