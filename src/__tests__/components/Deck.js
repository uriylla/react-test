import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../elements/Button';
import Deck, { DeckWrapper } from '../../components/Deck';
import BlackCards from '../../components/BlackCards';
import WhiteCards from '../../components/WhiteCards';

test('should render Deck correctly', () => {
  const wrapper = shallow(<Deck />);
  expect(wrapper.find(DeckWrapper).length).toBe(1);
  expect(wrapper.find(BlackCards).length).toBe(1);
  expect(wrapper.find(WhiteCards).length).toBe(1);
});