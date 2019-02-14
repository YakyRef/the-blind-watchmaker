import { combineReducers } from "redux";
import treeReducer from "./tree";

export default combineReducers({
  treeEvolution:treeReducer
});
