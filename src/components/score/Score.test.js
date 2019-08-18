import React from 'react';
import { mount } from 'enzyme';
import Score from './Score';
import configureStore from 'redux-mock-store';
import data from '../../data/data';
import { Provider } from 'react-redux';

describe('<Score />', () => {
  const dataLen = data.length;;

  const initialState = { score: dataLen };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Score store={store} />
      </Provider>)
  })

  it('renders heading', () => {
    expect(wrapper.exists('h1')).toEqual(true);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('renders p tags for 20% ratio', () => {
    const initialState = { score: Math.floor(dataLen / 4) };
    const store = mockStore(initialState);
    const localWrapper = mount(
      <Provider store={store}>
        <Score store={store} />
      </Provider>)

    expect(localWrapper.exists('p')).toEqual(true);
    expect(localWrapper.find('p')).toHaveLength(2);
  });

  it('renders p tags for 50% ratio', () => {
    const initialState = { score: Math.floor(dataLen / 2) };
    const store = mockStore(initialState);
    const localWrapper = mount(
      <Provider store={store}>
        <Score store={store} />
      </Provider>)

    expect(localWrapper.exists('p')).toEqual(true);
    expect(localWrapper.find('p')).toHaveLength(2);
    expect(localWrapper.exists('p')).toEqual(true);
    expect(localWrapper.find('p')).toHaveLength(2);
  });

  it('renders p tags for 100% ratio', () => {
    const initialState = { score: Math.floor(dataLen) };
    const store = mockStore(initialState);
    const localWrapper = mount(
      <Provider store={store}>
        <Score store={store} />
      </Provider>)

    expect(localWrapper.exists('p')).toEqual(true);
    expect(localWrapper.find('p')).toHaveLength(2);
    expect(localWrapper.exists('p')).toEqual(true);
    expect(localWrapper.find('p')).toHaveLength(2);
  });

  it('simulates share click event', () => {
    expect(wrapper.exists('#share')).toEqual(true);
  });

  it('simulates restart click event', () => {
    expect(wrapper.exists('#restart')).toEqual(true);
  });
});