import React from 'react';
import { shallow } from 'enzyme';
import Intro from './Intro';
import logo from '../../images/leiounao.svg';

describe('<Intro />', () => {
  it('renders the logo image', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });

  it('renders both paragraph tags', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper.exists('p')).toEqual(true);
    expect(wrapper.find('p')).toHaveLength(2);
  });

  it('renders start button', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper.exists('button')).toEqual(true);
    expect(wrapper.find('button').text()).toEqual('Começar');
  });

  it('simulates click event', () => {
    const mockHandleClick = jest.fn();
    const wrapper = shallow(<Intro handleClick={mockHandleClick} />);
    wrapper.find('button').simulate('click');
    expect(mockHandleClick.mock.calls.length).toEqual(1);
  });
});