import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodos = todos => {
  return todos;
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos)
  };
};

export default connect(mapStateToProps)(TodoList);
