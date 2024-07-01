import React, { useState } from 'react';
import SearchIcon from './icons/IconSearch';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Propagate search term to parent component
  };

  return (
    <div className="search-bar">
      <SearchIcon className="searchicon" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Pipedrive"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
