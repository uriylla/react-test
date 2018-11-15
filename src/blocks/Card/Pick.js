import styled from 'styled-components';

export default styled.input`
  font-family: Arial, Helvetica, sans-serif;
  max-width: 50px;
  font-weight: bold;
  font-size: '8px';
  font-size: '0.5em';
  background: none;
  color: white; 
  border: ${props => props.editable ? 'default' : 'none'};
  pointer-events: ${props => props.editable ? 'default' : 'none'};
`