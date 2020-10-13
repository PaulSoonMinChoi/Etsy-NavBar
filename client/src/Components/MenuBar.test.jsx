/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuBar from './MenuBar.jsx';

configure({ adapter: new Adapter() });


describe('<MenuBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MenuBar />);
  });

  it('should correctly render MenuBar Component', () => {
    const component = shallow(<MenuBar />);
    expect(component).toMatchSnapshot();
  });

  it('Should render dropdown when user hovers Jewelry & Accessories menubar category', () => {
    expect(wrapper.state('hovering')).toBe('');
    wrapper.setState({ hovering: 'Jewelry & Accessories' });
    expect(wrapper.state('hovering')).toBe('Jewelry & Accessories');
  });

  // it('renders one <SearchBar /> component', () => {
  //   expect(wrapper.find(SearchBar)).toHaveLength(1);
  // });
});
