import React from 'react'
import HomeProduct from './HomeProduct'

const HomeProducts = (props) => {
  return props.products ? props.products.map((product, index) => {
    const { name, hero, images } = product
    const minAmountValue = (product.priceRange && product.priceRange.selling.low) || product.price.regular
    const maxAmountValue = (product.priceRange && product.priceRange.selling.high) || product.price.regular
    return (
      <div id="product-container" class="col-md-4 col-12">
        <HomeProduct
          key={index.toString()}
          name={name}
          minAmountValue={minAmountValue}
          maxAmountValue={maxAmountValue}
          hero={hero}
          images={images}
        />
      </div>
    )
  }) : true
}
export default HomeProducts
