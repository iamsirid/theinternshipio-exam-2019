const isLetter = char => char.match(/[a-z]/i);
const isNumber = char => char.match(/^\d+$/);
const replaceAt = (str, index, char) =>
  str.substring(0, index) + char + str.substring(index + 1);

// Generating random whole numbers in JavaScript in a specific range
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = arr => arr[getRandomInt(0, arr.length - 1)];

const getAllIndexOf = (arr, char) => {
  let indexes = [];
  let cIndex = -1;
  let offset = 0;
  while (true) {
    cIndex = arr.substring(cIndex + 1).indexOf(char);
    if (cIndex == -1) break;
    cIndex += offset;
    offset = cIndex + 1;
    indexes.push(cIndex);
  }

  return [...indexes];
};

module.exports = {
  isLetter,
  isNumber,
  replaceAt,
  getRandomInt,
  getRandomArrayElement,
  getAllIndexOf
};
