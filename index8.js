// CHALLENGE SORT BOXES

function isSorted(boxNumbers) {
  for (let i = 1; i < boxNumbers.length; i++) {
    if (boxNumbers[i - 1] > boxNumbers[i]) {
      console.log(`${boxNumbers}`, false);
      return false;
    }
  }
  console.log(`${boxNumbers}`, true);
  return true;
}

isSorted([1, 2, 3, 4, 5]);
isSorted([0, 1, 1, 1, 2]);
isSorted([1, 2, 11]);
isSorted([5]);
isSorted([]);
isSorted([0, 3, 1, 2, 2, 2]);
isSorted([1, 11, 2]);
