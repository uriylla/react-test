import React from 'react';
import styled from 'styled-components';
import H1 from '../elements/H1';
import Card from '../components/CardView';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({isBlack}) => isBlack ? 'whitesmoke' : '#232323'};
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
  min-height: 100px;
  margin-top: 25px;
`;

export default ({cards, isBlack}) => (
  <Wrapper isBlack={isBlack}>
    <H1 style={{color: isBlack ? '#232323' : 'whitesmoke'}} >{isBlack ? 'Black Cards' : 'WiteCards'}</H1>
    <CardsWrapper>
      {cards.map((card, i) => <Card key={i} isPreview={true} {...card} />)}
    </CardsWrapper>
  </Wrapper>
)