import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, addToCart, addToWishlist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sorting, setSorting] = useState('');

  const filteredProducts = products.filter((product) => {
      if (selectedFilters.length === 0) {
        return true;
      }
      return selectedFilters.includes(product.category);
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      if (sorting === 'low-to-high') {
        return a.price - b.price;
      } else if (sorting === 'high-to-low') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    return (
      <div className="product-list">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    );
  };
  
  export default ProductList;