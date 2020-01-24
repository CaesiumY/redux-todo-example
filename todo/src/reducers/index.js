import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          isComplete: !state[action.index].isComplete
        }),
        ...state.slice(action.index + 1)
      ];
    case DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
