import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProductGallery.css'; 

const ProductGallery = ({ product, onClose }) => {
  const images = product.images.map((image) => ({
    original: '/images/shirt1.jpg',
    thumbnail: '/images/shirt1.jpg', 
  }));

  return (
    <div className="product-gallery">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
};

export default ProductGallery;
