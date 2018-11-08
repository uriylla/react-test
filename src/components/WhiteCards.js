import { connect } from 'react-redux';
import CardsList from './CardsList';

const mapStateToProps = state => ({
  cards: state.data.whiteCards,
  type: white
})

export default connect(mapStateToProps)(CardsList);
