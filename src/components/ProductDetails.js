import React, { useState, useEffect } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => { 
  const [selectedSize, setSelectedSize] = useState('');
  const [bag, setBag] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 

  
  useEffect(() => {
    const storedBag = localStorage.getItem('bag');
    if (storedBag) {
      setBag(JSON.parse(storedBag));
    }
  }, []);


  
  const addToBag = () => {
    const updatedBag = [...bag, { ...product, size: selectedSize }];
    setBag(updatedBag);
    localStorage.setItem('bag', JSON.stringify(updatedBag));
  };

  const removeFromBag = (productId) => {
    const updatedBag = bag.filter(item => item.id !== productId);
    setBag(updatedBag);
    localStorage.setItem('bag', JSON.stringify(updatedBag));
  };

  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(product.price).replace(/\.00$/, '');

  const handleImageThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };
  

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.images[selectedImageIndex]} alt={product.name} className="product-image-zoomable" />
        <div className="image-thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.name}
              className={`image-thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
              onClick={() => handleImageThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{formattedPrice}</p>
        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="">Select Size</option>
        {product.sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
        </select>
        <button className="add-to-cart" onClick={addToBag}>
  Add to Cart
</button>
        <div className="bag">
          {bag.map(item => (
            <div key={item.id} className="bag-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Size: {item.size}</p>
              <button onClick={() => removeFromBag(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;