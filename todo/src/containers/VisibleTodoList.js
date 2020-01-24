import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { completeTodo, deleteTodo } from "../actions";

const getVisibleTodos = todos => {
  return todos;
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos)
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
