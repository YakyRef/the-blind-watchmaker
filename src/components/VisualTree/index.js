import React from "react";
import PropTypes from "prop-types";

const VisualTree = ({
  treeHeight,
  treeWidth,
  trunkColor,
  branchesColor,
  branchesNumber,
  isChildren
}) => {
  const arrayToRgb = arr => {
    return `rgb(${arr.join()})`;
  };

  return (
    <div className={isChildren ? "children-tree" : "parent-tree"}>
      <div>branchesNumber: {branchesNumber}</div>
      <div>treeHeight: {treeHeight}</div>
      <div>treeWidth: {treeWidth}</div>
      <div style={{ backgroundColor: arrayToRgb(branchesColor) }}>
        branchesColor: {branchesColor}
      </div>
      <div style={{ backgroundColor: arrayToRgb(trunkColor) }}>
        trunkColor: {trunkColor}
      </div>
    </div>
  );
};

VisualTree.propTypes = {
  branchesNumber: PropTypes.number,
  treeHeight: PropTypes.number,
  treeWidth: PropTypes.number,
  trunkColor: PropTypes.array,
  branchesColor: PropTypes.array,
  isChildren: PropTypes.bool
};

export default VisualTree;
