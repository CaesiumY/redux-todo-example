import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div>
      <ul className="list-group container">
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;
