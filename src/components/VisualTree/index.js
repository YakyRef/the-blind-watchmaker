import React from "react";
import PropTypes from "prop-types";

const VisualTree = ({
  treeHeight,
  treeWidth,
  trunkColor,
  branchesColor,
  branchesNumber,
  isChildren,
  setParentTree,
  createTreeChild
}) => {
  const arrayToRgb = arr => {
    return `rgb(${arr.join()})`;
  };
  const trunkStyle = {
    backgroundColor: arrayToRgb(trunkColor)
  };
  const branchesStyle = {
    backgroundColor: arrayToRgb(branchesColor)
  };

  return (
    <div
      className={isChildren ? "children-tree" : "parent-tree"}
      onClick={() => {
        isChildren &&
          setParentTree({
            treeHeight: treeHeight,
            treeWidth: treeWidth,
            trunkColor: trunkColor,
            branchesColor: branchesColor,
            branchesNumber: branchesNumber
          });
        createTreeChild({
          treeHeight: treeHeight,
          treeWidth: treeWidth,
          trunkColor: trunkColor,
          branchesColor: branchesColor,
          branchesNumber: branchesNumber
        });
      }}
    >
      <div
        className="tree-model"
        style={{
          height: treeHeight * 20,
          width: treeWidth * 15,
          maxWidth: "300px"
        }}
      >
        <div className="tree-branches" style={branchesStyle} />
        <div className="tree-trunk" style={trunkStyle} />
      </div>

      <div>branchesNumber: {branchesNumber}</div>
      <div>treeHeight: {treeHeight}</div>
      <div>treeWidth: {treeWidth}</div>
      <div style={{ color: arrayToRgb(branchesColor) }}>
        branchesColor: {branchesColor}
      </div>
      <div style={{ color: arrayToRgb(trunkColor) }}>
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
  isChildren: PropTypes.bool,
  setParentTree: PropTypes.func,
  createTreeChild: PropTypes.func
};

export default VisualTree;
