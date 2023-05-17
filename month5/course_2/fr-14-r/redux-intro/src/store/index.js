import { createStore } from "redux";

const  INC = "INC"

const initState = {
  count: 0,
};

const couterReduser = (state = initState, action) => {
    console.log(action);
console.log(state.count);
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RES":
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(couterReduser);

export default store;

export const incAction = () => {
    return { type: INC };
   };

   export const decAction = () => {{ type: INC }}