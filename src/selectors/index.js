const getTreePartialState = state => state.treeEvolution.present;

export const getCurrentTree = state => getTreePartialState(state);
export const getTreeHeight = state => getTreePartialState(state).treeHeight;
export const getTreeWidth = state => getTreePartialState(state).treeWidth;
export const getBranchesNumber = state =>
  getTreePartialState(state).branchesNumber;
export const getTrunkColor = state => getTreePartialState(state).trunkColor;
export const getBranchesColor = state =>
  getTreePartialState(state).branchesColor;
