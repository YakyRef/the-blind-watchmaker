import { ADD_TREE } from "../constants/action-types";

const historyReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TREE:
      return [...state, payload];
    default:
      return state;
  }
};

export default historyReducer;
