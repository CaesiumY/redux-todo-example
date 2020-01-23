import React from "react";
import PropTypes from "prop-types";

export default function Todo({ index, text }) {
  return (
    <>
      <li
        className="list-group-item row"
        data-item={index}
        style={{ lineHeight: 3 }}
      >
        <div className="col-sm text">{text}</div>
        <div className="col-sm complete">
          <button className="btn btn-outline-secondary">Complete</button>
        </div>
        <div className="col-sm delete">
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </li>
    </>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired
};
