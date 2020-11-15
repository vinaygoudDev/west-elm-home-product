import React from 'react'
import { Carousel } from 'react-bootstrap'
const CarouselImage = ({images}) => {
  return (
    <Carousel>
      {images.map((image, index) => {
        return (
          <Carousel.Item key={index.toString()}>
            <img
              key={index.toString()}
              className="d-block w-100"
              src={image.href}
              alt="Product thumbnail {index.toString()+1}"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
export default CarouselImage
