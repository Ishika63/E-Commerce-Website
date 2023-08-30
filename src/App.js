import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from 'react-router-dom'; 
import Header from './components/Header';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import productsData from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    type: '',
    color: '',
    size: '',
    gender: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sorting, setSorting] = useState(''); 
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000); 
  };

  const filteredProducts = productsData.filter((product) => {
    const typeFilter = !selectedFilters.type || product.type === selectedFilters.type;
    const colorFilter = !selectedFilters.color || product.color === selectedFilters.color;
    const sizeFilter = !selectedFilters.size || product.size === selectedFilters.size;
    const targetAudienceFilter = !selectedFilters.targetAudience ||
      product.targetAudience === selectedFilters.targetAudience;
    const searchFilter = !searchQuery || (
      (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
    return (
      typeFilter && colorFilter && sizeFilter && targetAudienceFilter && searchFilter
    );
  });  

  const addToCart = (productId) => {
    const productToAdd = productsData.find((product) => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
    handlePopup('Added to Cart');
  };

  const addToWishlist = (productId) => {
    const productToAdd = productsData.find((product) => product.id === productId);
    setWishlistItems([...wishlistItems, productToAdd]);
    handlePopup('Added to Wishlist');
  };
  
  const sortProducts = (products) => {
    switch (sorting) {
      case 'recommended':
        
        
        return products.sort((a, b) => calculateRecommendedScore(b) - calculateRecommendedScore(a));
  
      case 'popularity':
        
        return products.sort((a, b) => b.popularity - a.popularity);
  
      case 'new':
        
        return products.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  
      case 'discount':
        
        return products.sort((a, b) => (b.originalPrice - b.discountedPrice) - (a.originalPrice - a.discountedPrice));
  
      case 'lowToHigh':
        return products.sort((a, b) => a.price - b.price);
  
      case 'highToLow':
        return products.sort((a, b) => b.price - a.price);
  
      case 'rating':
        
        return products.sort((a, b) => b.rating - a.rating);
  
      default:
        return products;
    }
  };

  const handleSortingChange = (value) => {
    setSorting(value);
  };

  const calculateRecommendedScore = (product) => {
    const popularityWeight = 0.4;
    const ratingWeight = 0.3;
    const recentnessWeight = 0.3;
  
    const popularityScore = product.popularity * popularityWeight;
    const ratingScore = product.rating * ratingWeight;
    const releaseDate = new Date(product.releaseDate);
    const recentnessScore = (new Date() - releaseDate) / (1000 * 3600 * 24) * recentnessWeight;
  
    return popularityScore + ratingScore + recentnessScore;
  };

  const filterOptions = {
    types: [...new Set(productsData.map((product) => product.type))],
    colors: [
      ...new Set(productsData.map((product) => product.color)),  
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    targetAudiences: ['Men', 'Women'], 
    products: productsData, 
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };
  
  return (
    <Router>
    <div className="app">
      <Header
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        setSearchQuery={setSearchQuery}
      />
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {filtersVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
      {showPopup && <div className="popup">{popupMessage}</div>}
      {filtersVisible && (
        <Filters
          filterOptions={filterOptions}
          selectedFilters={selectedFilters}
          updateFilters={setSelectedFilters}
          setSorting={setSorting}
          sorting={sorting}
          toggleFilters={toggleFilters}
        />
      )}
  
      <div className="sort-options">
        {/* Display only the Sort by options */}
        <div className="sorting-option">
          <label>Sort by:</label>
          <select value={sorting} onChange={(e) => handleSortingChange(e.target.value)}>
            <option value="">Recommended</option>
            <option value="popularity">Popularity</option>
            <option value="new">What's New</option>
            <option value="discount">Better Discount</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>
      <main>
          <Routes>
          <Route path="/" element={<Home sortProducts={sortProducts} filteredProducts={filteredProducts} addToCart={addToCart} addToWishlist={addToWishlist} />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home({ sortProducts, filteredProducts, addToCart, addToWishlist }) {
  return (
    <>
      {sortProducts(filteredProducts).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          onOpenDetails={() => Navigate(`/product/${product.id}`)} 
        />
      ))}
    </>
  );
}

function ProductDetailsPage() {
  const params = useParams();
  const productId = params.productId.toString(); 
  const product = productsData.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}



export default App;