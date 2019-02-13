import { getRandomInt } from "./getRandomNumber";
export const getRandomColor = (currentColor, minRange, maxRange) => {
  return currentColor.map((c, i) => {
    if (i === 2) {
      return Math.trunc(c * getRandomInt(minRange, maxRange));
    }

    return c;
  });
};
