import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
