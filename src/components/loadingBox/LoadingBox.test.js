import React from 'react';
import { shallow } from 'enzyme';
import LoadingBox from './LoadingBox';
import snake from '../../images/snake.png';

describe('<LoadingBox />', () => {
  it('renders the loading box with loading icon and text', () => {
    const loading = true;
    const wrapper = shallow(<LoadingBox loading={loading} />);
    expect(wrapper.find('img').prop('src')).toEqual(snake);
    expect(wrapper.find('figcaption').text()).toEqual('Carregando...');

  });

  it('does not render the loading box with loading icon and text', () => {
    const loading = false;
    const wrapper = shallow(<LoadingBox loading={loading} />);
    expect(wrapper.exists('img')).toEqual(false);
    expect(wrapper.exists('figcaption')).toEqual(false);
  });
});