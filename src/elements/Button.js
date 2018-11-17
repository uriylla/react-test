import styled from 'styled-components';

export default styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 7px 0 0;
  outline: none;
  text-decoration: none;
  border: 2px solid ${props => props.inverse ? 'ghostwhite' : '#232323' };
  color: ${props => props.inverse ? 'ghostwhite' : '#232323' };
  border-radius: 7px;
  height: 40px;
  width: 13rem;
  max-width: 30vw;
  background-color: ${props => props.inverse ? '#232323' : 'ghostwhite' };
  text-align: center;
  box-shadow: inset 0 -3px 0 0 ${props => props.inverse ? 'ghostwhite' : '#232323' };
  &:hover {
    border-color: #555;
    box-shadow: inset 0 -3px 0 0 #555;
    color: #555;
  }
`