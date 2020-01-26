import { CHANGE_FILTER } from "../actions";

export default function filter(state = "ALL", action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;

    default:
      return state;
  }
}
