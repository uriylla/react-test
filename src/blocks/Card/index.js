import styled from 'styled-components';

import Text from './Text';
import Pick from './Pick';

const Card = styled.div`
  background: #ffffff;
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

Card.Text = Text;
Card.Pick = Pick;

export default Card;