import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addTreeToHistory,
  createTreeChild,
  setParentTree
} from "./../../actions";
import VisualTree from "../VisualTree";
import {
  getCurrentTree,
  getTreeHeight,
  getBranchesColor,
  getTreeWidth,
  getTrunkColor,
  getBranchesNumber
} from "./../../selectors";

class Tree extends Component {
  componentDidMount() {
    const { createTreeChild, addTreeToHistory, currentTree } = this.props;
    // create children for the current Tree.
    createTreeChild(currentTree);
    // add current Tree to the history state.
    addTreeToHistory(currentTree);
  }
  
  render() {
    const {
      treeHeight,
      branchesColor,
      treeWidth,
      trunkColor,
      branchesNumber,
      currentTree,
      setParentTree,
      createTreeChild
    } = this.props;
    return (
      <div className="container">
        <div className="current-tree-container">
          <h2>Current Tree</h2>
          <VisualTree
            treeHeight={treeHeight}
            branchesColor={branchesColor}
            treeWidth={treeWidth}
            trunkColor={trunkColor}
            branchesNumber={branchesNumber}
          />
        </div>

        <h3>Please select a child : </h3>
        
        <div className="childs-tree-container">
          {currentTree.children &&
            currentTree.children.map(
              (
                {
                  treeHeight,
                  branchesColor,
                  treeWidth,
                  trunkColor,
                  currentTree,
                  branchesNumber
                },
                i
              ) => (
                <VisualTree
                  isChildren
                  treeHeight={treeHeight}
                  branchesColor={branchesColor}
                  treeWidth={treeWidth}
                  trunkColor={trunkColor}
                  branchesNumber={branchesNumber}
                  setParentTree={setParentTree}
                  createTreeChild={createTreeChild}
                  key={i}
                />
              )
            )}
        </div>
      </div>
    );
  }
}

Tree.propTypes = {
  currentTree: PropTypes.object,
  branchesNumber: PropTypes.number,
  treeHeight: PropTypes.number,
  treeWidth: PropTypes.number,
  trunkColor: PropTypes.array,
  branchesColor: PropTypes.array,
  addTreeToHistory: PropTypes.func,
  setParentTree: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentTree: getCurrentTree(state),
    branchesNumber: getBranchesNumber(state),
    treeHeight: getTreeHeight(state),
    treeWidth: getTreeWidth(state),
    trunkColor: getTrunkColor(state),
    branchesColor: getBranchesColor(state)
  };
};

export default connect(
  mapStateToProps,
  { addTreeToHistory, createTreeChild, setParentTree }
)(Tree);
