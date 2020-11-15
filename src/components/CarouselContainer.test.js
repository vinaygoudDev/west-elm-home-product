import React from 'react'
import CarouselContainer from './CarouselContainer'
import { Modal } from 'react-bootstrap'

let props = {
	showModal: true,
	closeModal: jest.fn(),
	images: [{href: 'hero.png'}]
}

describe('renders CarouselContainer', () => {
	let wrapper = shallow(<CarouselContainer />)
	it('renders Modal', () => {
		expect(wrapper.find('Modal').length).toBe(0)
	})
})
