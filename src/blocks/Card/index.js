import styled from 'styled-components';

import Text from './Text';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: ${props => props.isPreview ? '0.8em' : '2em'};
  cursor: ${props => props.isPreview ? 'pointer' : 'default'};
  box-shadow: ${props => props.isPreview ? 'none' : '0px 0px 37px 3px rgba(0,0,0,0.75)'};
  overflow: hidden;
  background-color: ${props => props.isBlack ? '#232323' : 'ghostwhite'};
  color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
  width: ${props => props.isPreview ? '170px' : '30vw'};
  height: ${props => props.isPreview ? '150px' : '75vh'};
  border-radius: ${props => props.isPreview ? '5px' : '35px'};
  margin: 10px;
  padding: ${props => props.isPreview ? '5px' : '30px 20px'};
  position: relative;

`;

Card.Text = Text;

export default Card;