import { connect } from 'react-redux';
import CardsList from './CardsList';
import { getBlackCards } from '../selectors/cards';

const mapStateToProps = state => ({
  cards: getBlackCards(state.cards)
});

export default connect(mapStateToProps)(CardsList);
