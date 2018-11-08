import { connect } from 'react-redux';
import CardsList from './CardsList';

const mapStateToProps = state => ({
  cards: state.data.blackCards,
  type: black
})

export default connect(mapStateToProps)(CardsList);
