import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";
import "../css/TodoList.css";

function TodoList({ todos, onTodoComplete, onTodoDelete }) {
  return (
    <div>
      <ul className="list-group center">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            {...todo}
            onComplete={() => {
              onTodoComplete(index);
            }}
            onDelete={() => {
              onTodoDelete(index);
            }}
            index={index}
          />
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
