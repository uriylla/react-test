import React from 'react';
import styled from 'styled-components';
import Card from '../components/CardView';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100;
  min-height: 20px;
  margin: 5px;
  background: darkgray;
`

export default ({cards}) => (
  <Wrapper>
    {cards.map((card, i) => <Card key={i} isPreview={true} {...card} />)}
  </Wrapper>
)