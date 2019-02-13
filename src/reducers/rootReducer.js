import { combineReducers } from "redux";
import treeReducer from "./tree";
import historyReducer from "./history";

export default combineReducers({
  history:historyReducer,
  currentTree:treeReducer
});
