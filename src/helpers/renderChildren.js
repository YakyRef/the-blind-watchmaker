import { getRandomInt } from "./getRandomNumber";
import { getRandomColor } from "./getRandomColor";
export const renderChildren = ({
  treeHeight,
  treeWidth,
  branchesNumber,
  trunkColor,
  branchesColor
}) => {
  const childrenArray = [];
  const childrenNumber = 3;
  const maxRandomRange = 1.4;
  const minRandomRange = 0.1;
  const roundNumber = num => parseFloat(parseFloat(num).toFixed(2));
  for (let i = 0; i < childrenNumber; i++) {
    const result = {};

    result["branchesNumber"] = Math.trunc(
      branchesNumber * getRandomInt(minRandomRange, maxRandomRange)
    );
    result["treeHeight"] = roundNumber(
      treeHeight * getRandomInt(minRandomRange, maxRandomRange)
    );
    result["treeWidth"] = roundNumber(
      treeWidth * getRandomInt(minRandomRange, maxRandomRange)
    );

    result["trunkColor"] = getRandomColor(
      trunkColor,
      minRandomRange,
      maxRandomRange
    );
    result["branchesColor"] = getRandomColor(
      branchesColor,
      minRandomRange,
      maxRandomRange
    );

    childrenArray.push(result);
  }
  return childrenArray;
};
