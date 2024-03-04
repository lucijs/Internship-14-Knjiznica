import React from "react";
import "./Filter.css";

const Filter = ({ search, genreFilter, setSearch, setGenreFilter }) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleGenres = (e) => {
    const value = e.target.value;
    setGenreFilter(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pretraži po autoru, naslovu ili žanru"
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      <select value={genreFilter} onChange={(e) => handleGenres(e)}>
        <option value="">All Genres</option>
        <option value="Novel">Novel</option>
        <option value="Roman">Roman</option>
        <option value="Poezija">Poezija</option>
        <option value="Drama">Drama</option>
        <option value="Fantazija">Fantazija</option>
        <option value="Znanstvena fantastika">Znanstvena fantastika</option>
        <option value="Biografija">Biografija</option>
      </select>
    </div>
  );
};

export default Filter;
