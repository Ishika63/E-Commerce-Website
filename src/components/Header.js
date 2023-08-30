import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

const Header = ({ setSearchQuery, cartCount, wishlistCount }) => {
  const [searchText, setSearchText] = useState('');
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClearSearch = () => {
    setSearchText(''); 
    setSearchQuery(''); 
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleWishlistClick = () => {
    
    
    alert('Wishlist clicked');
  };

  const handleCartClick = () => {
    
    
    alert('Cart clicked');
  };

  return (
    <header className={`header ${isHeaderFixed ? 'fixed-header' : ''}`}> 
      <div className="filter-options">
        {/* Filter options */}
        <div className="filter-option">
          {/* Display filter options here */}
        </div>
      </div>
      <div className="logo">MyWebsite</div>
      <div className="search-bar">
      <div className="search-container">
      <button className="search-icon-button">
      <FontAwesomeIcon icon={faSearch} />
    </button>
    <input
      type="text"
      placeholder="Search for products..."
      value={searchText}
      onChange={handleSearchChange}
    />
  </div>
  <button className="clear-button" onClick={handleClearSearch}>
    Clear Search
  </button>
      </div>
      <div className="icons right">
        <div className="cart-icon" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="count">{cartCount}</span>
          <p className="label">Cart</p>
        </div>
        <div className="wishlist-icon" onClick={handleWishlistClick}>
          <FontAwesomeIcon icon={faHeart} />
          <span className="count">{wishlistCount}</span>
          <p className="label">Wishlist</p>
        </div>
      </div>

    </header>
  );
};

export default Header;
