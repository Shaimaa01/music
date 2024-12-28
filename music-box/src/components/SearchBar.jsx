/* eslint-disable react/prop-types */
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Search for tracks, artists, or albums"
        className="w-full p-2 border rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;