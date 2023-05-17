import { createStore } from "redux";
// state
const initialState = {
  todos: [{ title: "Learn  / CSS", id: 1 }],
};
// Reducer
const todoReducer = (state = initialState, action) => {
  // action = { type: "" }
  switch (action.type) {
    case "ADD-TODO":
      return {
        todos:[...state.todos, action.payload]
      };
      case "REMOVE-TODO":
      return {
        todos:jngoj,
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
