import React from 'react';
import { shallow } from 'enzyme';
import CardsList from '../../components/CardsList';
import Card from '../../components/CardView';
import { blackCards } from '../../fixtures/cards';

test('should render CardsList correctly', () => {
  const wrapper = shallow(<CardsList cards={blackCards} />);
  expect(wrapper.find(Card).length).toBe(blackCards.length);
})
