import undoable, { distinctState } from 'redux-undo';
import { CREATE_CHILDREN,SET_PARENT } from "../constants/action-types";

const initialState = {
  treeHeight: 2.2,
  treeWidth: 1.3,
  branchesNumber: 26,
  trunkColor: [165, 42, 42],
  branchesColor: [0, 255, 102],
  children: []
};

const treeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_CHILDREN:
      return { ...state, children: payload };
    case SET_PARENT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

const treeReducerWithTimeTravel = undoable(treeReducer, {
  filter: distinctState()
})

export default treeReducer;
