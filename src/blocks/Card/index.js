import styled from 'styled-components';

import Text from './Text';
import Pick from './Pick';

const Card = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: ${props => props.isPreview ? '0.8em' : '2em'};
  overflow: hidden;
  background-color: ${props => props.isBlack ? 'black' : 'white'};
  color: ${props => props.isBlack ? 'white' : 'black'};
  width: ${props => props.isPreview ? '170px' : '30vw'};
  height: ${props => props.isPreview ? '60px' : '75vh'};
  border-radius: ${props => props.isPreview ? '5px' : '35px'};
  margin: 5px 5px 10px;
  padding: ${props => props.isPreview ? '5px' : '30px 20px'};
  position: relative;
`;

Card.Text = Text;
Card.Pick = Pick;

export default Card;