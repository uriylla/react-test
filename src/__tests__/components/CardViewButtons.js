import React from 'react';
import { mount } from 'enzyme';
import Button from '../../elements/Button';
import CardViewButtons from '../../components/CardViewButtons';

test('should render card buttons on default mode correctly', () => {
  const wrapper = mount(<CardViewButtons />);
  expect(wrapper.find(Button).length).toBe(2);
});

test('should render card buttons on editing mode correctly', () => {
  const wrapper = mount(<CardViewButtons
    editing={true}
  />);
  expect(wrapper.find(Button).length).toBe(1);
});

test('should render card buttons on adding mode correctly', () => {
  const wrapper = mount(<CardViewButtons
    adding={true}
  />);
  expect(wrapper.find(Button).length).toBe(1);
});

test('should handle edit click correctly', () => {
  const editSpy = jest.fn();
  const wrapper = mount(<CardViewButtons handleEditClick={editSpy}/>);
  wrapper.find(Button).at(0).simulate('click');
  expect(editSpy).toHaveBeenCalled();
});

test('should handle remove click correctly', () => {
  const removeSpy = jest.fn();
  const wrapper = mount(<CardViewButtons handleRemoveClick={removeSpy}/>);
  wrapper.find(Button).at(1).simulate('click');
  expect(removeSpy).toHaveBeenCalled();
});

test('should handle add click correctly', () => {
  const addSpy = jest.fn();
  const wrapper = mount(<CardViewButtons adding={true} handleAddClick={addSpy}/>);
  wrapper.find(Button).simulate('click');
  expect(addSpy).toHaveBeenCalled();
});

test('should handle apply click correctly', () => {
  const applySpy = jest.fn();
  const wrapper = mount(<CardViewButtons editing={true} handleApplyClick={applySpy}/>);
  wrapper.find(Button).simulate('click');
  expect(applySpy).toHaveBeenCalled();
});