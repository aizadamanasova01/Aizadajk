import { configureStore } from "@";

const initialState = {
  todos: [{ title: "Learn TOOLKIT ", id: 1 }],
};

const todoSlice = configureStore({
  name: "todos",
  initialState: initialState,
  redusers: {
    addNewTask(state, action) {
      state.todos.push(action.payload);
    },
    removeTask(state, action){
        state.todos = state.todos.filter((el) => el,id !== action.payload.id)
    }
  },
});

export const { addNewTask, removeTask} = todoSlice.action;

const store = configureStore();

export default store;
