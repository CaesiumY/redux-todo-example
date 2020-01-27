import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Filter.css";

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
        className={`${active} nav-item ${filterTypes[key]}`}
      >
        <Link to={key === filterTypes.ALL ? "" : key} className="nav-link">
          {filterTypes[key]}
        </Link>
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
