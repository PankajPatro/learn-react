import React from 'react';
import { shallow } from 'enzyme';
import CompanyLogo from './CompanyLogo';

describe('<CompanyLogo />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CompanyLogo />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
