const TARGET = 3;
const ARRAY_LIST = [3, 2, 5, 1, 4, 8, 7, 6];

const SORTED_ARRAY = sortArray(ARRAY_LIST);

function binarySearch(list, target) {
  let low = 0;
  let high = ARRAY_LIST.length - 1;

  while (low <= high) {
    const middleIndex = Math.floor((low + high) / 2);
    const guessedValue = list[middleIndex];

    if (guessedValue === target) {
      return guessedValue;
    }

    if (guessedValue > target) {
      high = middleIndex - 1;
    } else {
      low = middleIndex + 1;
    }
  }
  return null;
}

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(binarySearch(SORTED_ARRAY, TARGET));
