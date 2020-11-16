import React from 'react';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => ({groups: []})}));

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
	const mockSetState = jest.fn();
	const setProductData = jest.fn();
	jest.mock('react', () => ({
	    ...jest.requireActual('react'),
	    useState: initial => [initial, mockSetState]
	}));
	let wrapper = Enzyme.shallow(<App />)
	it('renders header', () => {
		expect(wrapper.find('h1').text()).toBe("West Elm Home products")
	})
	it('renders header', () => {
		expect(wrapper.find('h1').length).toBe(1)
	})
	it('renders Container', () => {
		expect(wrapper.find('Container').length).toBe(1)
	})
	it('renders Home products', () => {
		expect(wrapper.find('HomeProducts').length).toBe(1)
	})
	it('sets state for App', () => {
		const { result, waitForNextUpdate } = renderHook(() => App());
		(async () => {
		    await waitForNextUpdate();
		})();
	    setTimeout(() => {
	        expect(mockSetState).toHaveBeenCalled();
	        expect(setProductData).toHaveBeenCalled();
	        expect(fetch).toHaveBeenCalled();
	    }, 100);
	})
})
