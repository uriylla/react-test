import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../elements/Button';
import { Header, HeaderWrapper } from '../../components/Header';


test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(HeaderWrapper).length).toBe(1);
  expect(wrapper.find(Button).length).toBe(3);
});

test('should handle add new card click', () => {
  const pushSpy = jest.fn();
  const wrapper = shallow(<Header history={{push: pushSpy}} />);
  wrapper.instance().addNewCard();
  expect(pushSpy).toHaveBeenCalledWith('/add')
})

test('should handle request cards click', () => {
  const requestCardsSpy = jest.fn();
  const wrapper = shallow(<Header requestCardsData={requestCardsSpy} />);
  wrapper.instance().fetchCah();
  expect(requestCardsSpy).toHaveBeenCalled()
})

test('should handle clear deck click', () => {
  const clearDeckSpy = jest.fn();
  const wrapper = shallow(<Header clearDeck={clearDeckSpy} />);
  wrapper.instance().clearDeck();
  expect(clearDeckSpy).toHaveBeenCalled()
})