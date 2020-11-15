import React, {useState} from 'react'
import CarouselContainer from './CarouselContainer'

const HomeProduct = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { name, minAmountValue, maxAmountValue, hero, images } = props;
  let styles = {
      backgroundImage: `url(${hero.href})`,
    };
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
    return (
      <React.Fragment>
        <div className="product-image" style={styles} onClick={openModal} aria-label={name}>
          <label className="product-name">{name}</label>
          <b className="product-price" aria-label="Product Price Range">${minAmountValue} - ${maxAmountValue}</b>
        </div>
        <CarouselContainer showModal={showModal} closeModal={closeModal} images={images} />
      </React.Fragment>
    );
}

export default HomeProduct
