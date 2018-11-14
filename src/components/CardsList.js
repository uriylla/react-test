import React from 'react';
import styled from 'styled-components';
import Card from '../components/CardView';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
  overflow: scroll;
  background: darkgray;
`

export default ({cards}) => (

  <Wrapper>
    {cards && cards.slice(0,50).map((card, i) =>
      <Card key={i} {...card} />)}
  </Wrapper>
)