import React, { useState } from 'react';
import './Filters.css';


const Filters = ({ filterOptions, selectedFilters, updateFilters, setSorting, sorting, toggleFilters }) => {
  const [filtersVisible] = useState(true);

  const handleFilterChange = (attribute, value) => {
    if (attribute === 'type') {
      setSorting(''); // Clear sorting when changing type filter
    }
    updateFilters({ ...selectedFilters, [attribute]: value });
  };

  const getAvailableSizes = () => {
    if (selectedFilters.type === '') {
      return filterOptions.sizes;
    } else {
      const selectedShirt = filterOptions.products.find(
        (product) => product.type === selectedFilters.type
      );
      return selectedShirt ? selectedShirt.sizes : [];
    }
  };


  return (
    <div className="filters">
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {filtersVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
    <h2><b>Filters</b></h2>
      <div className="filter-option">
        <label>Type:</label>
        <select
          value={selectedFilters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          <option value="">All</option>
          {filterOptions.types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-option">
        <label>Color:</label>
        <select
          value={selectedFilters.color}
          onChange={(e) => handleFilterChange('color', e.target.value)}
        >
          <option value="">All</option>
          {filterOptions.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-option">
  <label>Gender:</label>
  <select
    value={selectedFilters.targetAudience}
    onChange={(e) => handleFilterChange('targetAudience', e.target.value)}
  >
    <option value="">All</option>
    {filterOptions.targetAudiences.map((audience) => (
      <option key={audience} value={audience}>
        {audience}
      </option>
    ))}
  </select>
</div>
      <div className="filter-option">
        <label>Size:</label>
        <select
          value={selectedFilters.size}
          onChange={(e) => handleFilterChange('size', e.target.value)}
        >
          <option value="">All</option>
          {getAvailableSizes().map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
