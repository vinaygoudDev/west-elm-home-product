import React from 'react'
import CarouselImage from './CarouselImage'

let images = [{href: 'hero.png'}]

describe('renders CarouselImage', () => {
	let wrapper = mount(<CarouselImage images={images}/>)
	it('renders Carousel', () => {
		expect(wrapper.find('Carousel').length).toBe(1)
	})
})
