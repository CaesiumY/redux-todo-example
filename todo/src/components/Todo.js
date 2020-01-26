import React from "react";
import PropTypes from "prop-types";

export default function Todo({
  index,
  text,
  isComplete,
  onComplete,
  onDelete
}) {
  const completeStatus = isComplete ? "success" : "secondary";
  return (
    <>
      <li
        className="list-group-item row"
        data-item={index}
        style={{ lineHeight: 3 }}
      >
        <div className={`col-sm text ${completeStatus}`}>{text}</div>
        <div className="col-sm complete">
          <button
            className={`btn btn-outline-${completeStatus}`}
            onClick={onComplete}
          >
            Complete
          </button>
        </div>
        <div className="col-sm delete">
          <button className="btn btn-outline-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
