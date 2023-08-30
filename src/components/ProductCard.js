import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ProductCard.css';

const ProductCard = ({ product, addToCart, addToWishlist }) => {
  const { id, name, price, image } = product;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price).replace(/\.00$/, '');

  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
      <button className="add-to-cart" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
      <button className="add-to-wishlist" onClick={() => addToWishlist(id)}>
        Add to Wishlist
      </button>
      <button className="view-details" onClick={() => navigate(`/product/${id}`)}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard;


