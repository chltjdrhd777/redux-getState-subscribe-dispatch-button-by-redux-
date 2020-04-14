//Review
//1. createStore(reducer) = creating the container of data
//2. reducer = a function which alter the stored data

//dispatch({}) = acts like setState in useState()
//dispatch requires only an object.
//dispatch call createStore(countModifer) and countModifer would alter the stored data with what dispatch orders to add
// in this case, const countModifer = (count = 0 , action : {type:Add})
// then, inside curly curly bracket, change default data in accordance with the condition "action"
import { createStore } from "redux";

const countModifier = (count = 0, action: any) => {
  switch (action.type) {
    case "Add":
      return count + 1;
    case "Minus":
      return count - 1;
    default:
      return count;
  }
};

type TypeType = "Add" | "Minus";

export const countStore = createStore(countModifier);
export const reduxPlus = () => {
  countStore.dispatch<{ type: TypeType }>({ type: "Add" });
};
export const reduxMinus = () => {
  countStore.dispatch<{ type: TypeType }>({ type: "Minus" });
};
