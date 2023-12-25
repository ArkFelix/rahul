import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Adjust the path as necessary


const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for GIFs"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;