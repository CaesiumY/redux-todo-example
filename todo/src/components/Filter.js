import React from "react";
import PropTypes from "prop-types";

export const filterTypes = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  NOT_COMPLETED: "NOT_COMPLETED"
};

const Filter = ({ filter, onFilterChange }) => {
  const filterList = Object.keys(filterTypes).map((key, index) => {
    const active = filter === filterTypes[key] ? "active" : "";

    return (
      <li
        key={index}
        onClick={() => {
          onFilterChange(filterTypes[key]);
        }}
        className={`nav-item ${filterTypes[key]} ${active}`}
      >
        <a href="" className="nav-link">
          {filterTypes[key]}
        </a>
      </li>
    );
  });
  return <ul className="nav">{filterList}</ul>;
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
