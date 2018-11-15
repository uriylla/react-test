import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.inverse ? 'ghostwhite' : '#232323'}
`;