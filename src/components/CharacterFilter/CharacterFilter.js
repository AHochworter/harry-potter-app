import React from 'react';
import './CharacterFilter.css';
import PropTypes from 'prop-types';

function CharacterFilter({ filter, onFilterChange }) {
  return (
    <div className="character-filter">
      <label className="filter-by" htmlFor="filter-dropdown">
        Filter by:
      </label>
      <select
        className="filter-dropdown"
        name="filter-dropdown"
        id="filter-dropdown"
        value={filter}
        onChange={onFilterChange}
      >
        <option value="all">All</option>
        <option value="student">Student</option>
        <option value="staff">Staff</option>
      </select>
    </div>
  );
}

export default CharacterFilter;

CharacterFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
