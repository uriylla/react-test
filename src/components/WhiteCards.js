import { connect } from 'react-redux';
import CardsList from './CardsList';
import { getWhiteCards } from '../selectors/cards';

const mapStateToProps = state => ({
  cards: getWhiteCards(state.cards)
});

export default connect(mapStateToProps)(CardsList);
