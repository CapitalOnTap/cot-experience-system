/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Category from '../components/Category';

describe('With Enzyme', () => {
  it('It renders', () => {
    const wrapper = shallow(<Category />);

    expect(wrapper.length).toBe(1);
  });
});

describe('With Snapshot Testing', () => {
  it('It renders"', () => {
    const component = renderer.create(<Category />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
