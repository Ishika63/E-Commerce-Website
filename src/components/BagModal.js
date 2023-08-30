import React from 'react';
import './BagModal.css';

const BagModal = ({ cartItems, removeFromCart, closeBagModal }) => {
  return (
    <div className="bag-modal-overlay">
      <div className="bag-modal">
        <h2>Your Bag</h2>
        <ul className="bag-items">
          {cartItems.map((item) => (
            <li key={item.id} className="bag-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Price: ${item.price}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="close-button" onClick={closeBagModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BagModal;
