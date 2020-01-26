import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { completeTodo, deleteTodo } from "../actions";
import { filterTypes } from "../components/Filter";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterTypes.ALL:
      return todos;
    case filterTypes.COMPLETED:
      return todos.filter(todo => {
        return todo.isComplete === true;
      });
    case filterTypes.NOT_COMPLETED:
      return todos.filter(todo => {
        return todo.isComplete === false;
      });
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoComplete: index => {
      dispatch(completeTodo(index));
    },
    onTodoDelete: index => {
      dispatch(deleteTodo(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
