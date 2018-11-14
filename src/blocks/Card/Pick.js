import styled from 'styled-components';

export default styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  background-color: greenyellow;
  border: ${props => props.editable ? 'default' : 'none'};
  pointer-events: ${props => props.editable ? 'default' : 'none'};
`