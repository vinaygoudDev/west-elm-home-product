import React from 'react'
import { Modal } from 'react-bootstrap'
import CarouselImage from './CarouselImage'
const CarouselContainer = ({showModal, closeModal, images}) => {
  return showModal ? (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body bsPrefix="carousel-modal-body">
        <CarouselImage images={images} />
      </Modal.Body>
    </Modal>
  ) : null
}
export default CarouselContainer
