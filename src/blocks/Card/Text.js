import styled from 'styled-components';

export default styled.input`
  margin: 5px;
  border: ${props => props.editable ? 'default' : 'none'};
  pointer-events: ${props => props.editable ? 'default' : 'none'};
`

