import React from 'react';
import { mount } from 'enzyme';
import Card from '../../blocks/Card';
import Pick from '../../blocks/Pick';
import { CardView } from '../../components/CardView';
import CardViewButtons from '../../components/CardViewButtons';
import { blackCards, whiteCards } from '../../fixtures/cards';
import { CANCEL } from 'redux-saga';

test('should render black card correctly', () => {
  const wrapper = mount(<CardView
    {...blackCards[0]}
  />);
  expect(wrapper.find(Pick).length).toBe(1);
  expect(wrapper.find(Pick.Value).length).toBe(1);
  expect(wrapper.find(Card.Text).length).toBe(1);
  expect(wrapper.find(CardViewButtons).length).toBe(1);
  expect(wrapper.instance().isBlack()).toBeTruthy();
  expect(wrapper.instance().isEditable()).toBeFalsy();
});

test('should render white card correctly', () => {
  const wrapper = mount(<CardView
    {...whiteCards[0]}
  />);
  expect(wrapper.find(Pick).length).toBe(0);
  expect(wrapper.find(Card.Text).length).toBe(1);
  expect(wrapper.find(CardViewButtons).length).toBe(1);
  expect(wrapper.instance().isBlack()).toBeFalsy();
  expect(wrapper.instance().isEditable()).toBeFalsy();
});

test('should render a card on add mode correctly', () => {
  const wrapper = mount(<CardView
    {...blackCards[0]}
    adding={true}
  />);
  expect(wrapper.find(Pick).length).toBe(1);
  expect(wrapper.find(Pick.Value).length).toBe(1);
  expect(wrapper.find(Card.Text).length).toBe(1);
  expect(wrapper.find(CardViewButtons).length).toBe(1);
  expect(wrapper.instance().isEditable()).toBeTruthy();
});

test('should render a card on edit mode correctly', () => {
  const wrapper = mount(<CardView
    {...blackCards[0]}
    editing={true}
  />);
  expect(wrapper.find(Pick).length).toBe(1);
  expect(wrapper.find(Pick.Value).length).toBe(1);
  expect(wrapper.find(Card.Text).length).toBe(1);
  expect(wrapper.find(CardViewButtons).length).toBe(1);
  expect(wrapper.instance().isEditable()).toBeTruthy();
});

test('should render a card on preview mode correctly', () => {
  const wrapper = mount(<CardView
    {...blackCards[0]}
    isPreview={true}
  />);
  expect(wrapper.find(Card.Text).length).toBe(1);
  expect(wrapper.instance().isEditable()).toBeFalsy();
});

test('should handle edit click correctly', () => {
  const wrapper = mount(<CardView
    {...whiteCards[0]}
  />);
  wrapper.instance().handleEditClick();
  expect(wrapper.state().adding).toBeFalsy();
  expect(wrapper.state().editing).toBeTruthy();
  expect(wrapper.instance().isEditable()).toBeTruthy();
});

test('should handle apply click correctly', () => {
  const pushSpy = jest.fn()
  const editCardSpy = jest.fn()
  const card = blackCards[0];
  const wrapper = mount(<CardView
    {...card}
    history={{ push: pushSpy }}
    editCard={editCardSpy}
    editing={true}
  />);
  wrapper.instance().handleApplyClick();
  expect(editCardSpy).toHaveBeenCalledWith({ ...card });
  expect(pushSpy).toHaveBeenCalledWith('/')
});

test('should handle add click correctly', () => {
  const pushSpy = jest.fn()
  const addCardSpy = jest.fn()
  const card = blackCards[0];
  const wrapper = mount(<CardView
    {...card}
    history={{ push: pushSpy }}
    addCard={addCardSpy}
    editing={true}
  />);
  wrapper.instance().handleAddClick();
  expect(addCardSpy).toHaveBeenCalledWith({ ...card, id: undefined });
  expect(pushSpy).toHaveBeenCalledWith('/');
});

test('should handle remove click correctly', () => {
  const pushSpy = jest.fn()
  const removeCardSpy = jest.fn()
  const card = blackCards[0];
  const wrapper = mount(<CardView
    {...card}
    history={{ push: pushSpy }}
    removeCard={removeCardSpy}
  />);
  wrapper.instance().handleRemoveClick();
  expect(removeCardSpy).toHaveBeenCalledWith(card.id);
  expect(pushSpy).toHaveBeenCalledWith('/');
});

test('should handle card click correctly', () => {
  const pushSpy = jest.fn()
  const card = blackCards[0];
  const wrapper = mount(<CardView
    {...card}
    history={{ push: pushSpy }}
    isPreview={true}
  />);
  wrapper.instance().handleCardClick();
  expect(pushSpy).toHaveBeenCalledWith(`/card/${card.id}`);
});