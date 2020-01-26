import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../actions";

export default function todos(state = [], action) {
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
        // 인덱스 값의 앞과 뒤는 그대로 두고, 해당하는 인덱스를 가진 값의 데이터를 불러와서 새로 데이터를 만든다.
        // Object.assign를 통해 {} 안에 해당 인덱스에 해당하는 state의 데이터를 일단 모두 집어넣고, isComplete를 추가해준다.
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
