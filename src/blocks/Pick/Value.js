import styled from 'styled-components';
import Input from '../../elements/Input';

export default styled(Input)`
  max-width: 50px;
  text-align: center;
  outline: none;
  border: none;
  color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
  border-bottom: ${props => props.editable ? 'solid 2px white' : 'none'};
  border-color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
  pointer-events: ${props => props.editable ? 'default' : 'none'};
`