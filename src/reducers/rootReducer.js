import { combineReducers } from "redux";
import undoable from 'redux-undo';
import treeReducer from "./tree";

export default combineReducers({
  treeEvolution:undoable(treeReducer)
});
