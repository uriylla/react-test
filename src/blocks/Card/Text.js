import styled from 'styled-components';

export default styled.input`
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  width: 100%;
  border: ${props => props.editable ? 'default' : 'none'};
  pointer-events: ${props => props.editable ? 'default' : 'none'};
  background-color: ${props => props.isBlack ? 'black' : 'white'};
  color: ${props => props.isBlack ? 'white' : 'black'};
`

