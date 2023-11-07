import React from 'react';
import './CharacterFilter.css';

function CharacterFilter({ filter, onFilterChange }) {
  return (
    <div className="character-filter">
      <label htmlFor="filter-dropdown">Filter by:</label>
      <select id="filter-dropdown" value={filter} onChange={onFilterChange}>
        <option value="all">All</option>
        <option value="student">Student</option>
        <option value="staff">Staff</option>
      </select>
    </div>
  );
}

export default CharacterFilter;
