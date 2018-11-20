import React from 'react';

import styled from 'styled-components';

import WhiteCards from '../components/WhiteCards';
import BlackCards from '../components/BlackCards';

export const DeckWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  min-height: 20vh;
  padding-top: 70px;
`

export default (props) => (
  <DeckWrapper>
    <WhiteCards />
    <BlackCards />
  </DeckWrapper>
)