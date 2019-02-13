import { ADD_TREE, CREATE_CHILDREN } from "../constants/action-types";
import { renderChildren } from "../helpers/renderChildren";
export const createTreeChild = tree => {
  return {
    type: CREATE_CHILDREN,
    payload: renderChildren(tree)
  };
};
export const addTreeToHistory = tree => {
  return {
    type: ADD_TREE,
    payload: tree
  };
};
