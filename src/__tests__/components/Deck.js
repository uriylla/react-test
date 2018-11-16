import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../elements/Button';
import { Deck, DeckWrapper, HeaderWrapper } from '../../components/Deck';
import BlackCards from '../../components/BlackCards';
import WhiteCards from '../../components/WhiteCards';

test('should render Deck correctly', () => {
  const wrapper = shallow(<Deck />);
  expect(wrapper.find(HeaderWrapper).length).toBe(1);
  expect(wrapper.find(Button).length).toBe(3);
  expect(wrapper.find(DeckWrapper).length).toBe(1);
  expect(wrapper.find(WhiteCards).length).toBe(1);
});

test('should handle add new card click', () => {
  const pushSpy = jest.fn();
  const wrapper = shallow(<Deck history={{push: pushSpy}} />);
  wrapper.instance().addNewCard();
  expect(pushSpy).toHaveBeenCalledWith('/add')
})

test('should handle request cards click', () => {
  const requestCardsSpy = jest.fn();
  const wrapper = shallow(<Deck requestCardsData={requestCardsSpy} />);
  wrapper.instance().fetchCah();
  expect(requestCardsSpy).toHaveBeenCalled()
})

test('should handle clear deck click', () => {
  const clearDeckSpy = jest.fn();
  const wrapper = shallow(<Deck clearDeck={clearDeckSpy} />);
  wrapper.instance().clearDeck();
  expect(clearDeckSpy).toHaveBeenCalled()
})