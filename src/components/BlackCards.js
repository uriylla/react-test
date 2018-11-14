import { connect } from 'react-redux';
import CardsList from './CardsList';

const mapStateToProps = state => ({
  cards: state.data.blackCards
})

export default connect(mapStateToProps)(CardsList);
