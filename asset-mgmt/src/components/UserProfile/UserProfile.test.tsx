import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('<UserProfile />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<UserProfile />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
