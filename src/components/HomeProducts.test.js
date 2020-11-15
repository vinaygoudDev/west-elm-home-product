import React from 'react'
import HomeProducts from './HomeProducts'

let products = [{
  name: "homeProd1",
  hero: {
    href: "hero.png"
  },
  images: [],
  priceRange: {
    selling: {
      low: 10,
      high: 100
    }
  }
}]
describe('<HomeProducts />', () => {
  let wrapper = shallow(<HomeProducts products={products} />)
  it('renders component for each Home Product', () => {
    expect(wrapper.find('HomeProduct').length).toBe(1)
  })
  it('renders 1 div for each product', () => {
    expect(wrapper.find('div').length).toBe(1)
  })
  it('renders Product with right props', () => {
    const props = wrapper.find('HomeProduct').at(0).props()
    expect(props.name).toEqual('homeProd1')
    expect(props.hero.href).toEqual('hero.png')
    expect(props.minAmountValue).toBe(10)
    expect(props.maxAmountValue).toBe(100)
  })
})
