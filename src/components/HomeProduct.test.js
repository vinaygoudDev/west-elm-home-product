import React from 'react'
import HomeProduct from './HomeProduct'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

let products = {
  name: "homeProd1",
  hero: {
  	href: "hero.png"
  },
  images: [],
  minAmountValue: 10,
  maxAmountValue: 100
}

describe('<HomeProduct />', () => {
	const mockSetState = jest.fn();
	jest.mock('react', () => ({
	    ...jest.requireActual('react'),
	    useState: initial => [initial, mockSetState]
	}));
	let wrapper = shallow(<HomeProduct {...products} />)
	it('renders a label with product name', () => {
		expect(wrapper.find('label.product-name').text()).toEqual('homeProd1')
	})
	it('displays low to high price tag', () => {
		expect(wrapper.find('b').text()).toEqual('$10 - $100')
	})
	it('renders CarouselContainer', () => {
		expect(wrapper.find('CarouselContainer').length).toBe(1)
	})
	it('renders CarouselContainer with props', () => {
		const props = wrapper.find('CarouselContainer').props()
		expect(props.images).toBe(products.images)
	})
	it('sets state for App', () => {
		wrapper.find('.product-image').props().onClick();
	    setTimeout(() => {
	        expect(mockSetState).toHaveBeenCalled();
	    }, 100);
	})
})
