import styled from 'styled-components';

export default styled.textarea`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  flex-grow: 1;
  resize: none;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background: none;
  overflow: hidden;
  color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
  border: none;
  color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
  border-bottom: ${props => props.editable ? 'solid 2px' : 'none'};
  border-color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
  pointer-events: ${props => props.editable ? 'default' : 'none'};
  background-color: ${props => props.isBlack ? '#232323' : 'ghostwhite'};
  color: ${props => props.isBlack ? 'ghostwhite' : '#232323'};
`

