import React from 'react';
import { shallow } from 'enzyme';
import Logos from './Logos';
import logoYD from '../../images/logo-yd.svg';
import anacoze from '../../images/logo-anarcoze.png';

describe('<Logos />', () => {
  it('renders Yuri\'s logo', () => {
    const wrapper = shallow(<Logos />);
    expect(wrapper.find('[data-test="yuri-delgado"]').prop('src')).toEqual(logoYD);
    expect(wrapper.find('[data-test="anarcoze"]').prop('src')).toEqual(anacoze);
  });
});