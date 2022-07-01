"use strict";

function checkNumber(number) {
  let numberStats = [];
  if (number > 0) {
    numberStats.push(true);
  } else {
    numberStats.push(false);
  }
  if (number % 2 === 0) {
    numberStats.push(true);
  } else {
    numberStats.push(false);
  }

  if (number % 10 === 0) {
    numberStats.push(true);
  } else {
    numberStats.push(false);
  }
  return numberStats;
}

checkNumber(3);
// [true, false, false]
checkNumber(10);
// [true, true, true]
checkNumber(0);
// [false, true, true]
checkNumber(-1);
// [false, false, false]

// challenge arrays

function getArraysSum(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
  }
  console.log(sum);
  return sum;
}

getArraysSum([1, 2], [3, 4]);
// 1 + 2 + 3 + 4 = 10
getArraysSum([], []);

//CHALLENGE 3

function combineArrays(first, second) {
  let N = [];
  if (first.length === 0) {
    return N;
  }
  for (let i = 0; i < first.length; i++) {
    let a = first[i] + second[i];
    N.push(a);
  }
  return N;
}

combineArrays([1, 2, 5], [3, 6, 1]);
// [4, 8, 6];
combineArrays([1], [6]);
combineArrays([], []);

// challenge 4

function splitString(str) {
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  let array = [];
  for (let i = 0; i < str.length; i += 2) {
    array.push(str[i] + str[i + 1]);
  }
  console.log(array);
  return array;
}

splitString("abc");
splitString("abcdef");

//challenge 5

function scrollingText(word) {
  word = word.toUpperCase();
  let wordArray = [];
  for (let i = 0; i < word.length; i++) {
    let newWord = `${word.slice(i, word.length)}${word.slice(0, i)}`;
    wordArray.push(newWord);
  }
  console.log(wordArray);
  return wordArray;
}

scrollingText("robot");

//CHALLENGE 6

function isSpecialNumber(n) {
  let specialNumber = [0, 1, 2, 3, 4, 5];
  n = n.toString();
  let nArray = n.split("");
  console.log(nArray);
  for (let i = 0; i < nArray.length; i++) {
    nArray[i] = Number(nArray[i]);
    if (!specialNumber.includes(nArray[i])) {
      return "NOT!!";
    }
  }
  return "Special!!";
}

isSpecialNumber(2);

isSpecialNumber(9);
isSpecialNumber(23);

isSpecialNumber(39);

//CHALLENGE 7

function isTidy(number) {
  number = number.toString();
  let numberArray = number.split("");
  for (let i = 1; i < numberArray.length; i++) {
    numberArray[i] = Number(numberArray[i]);
    numberArray[i - 1] = Number(numberArray[i - 1]);
    if (numberArray[i] < numberArray[i - 1]) {
      console.log(number, false);
      return false;
    }
  }
  console.log(number, true);
  return true;
}

isTidy(12);

isTidy(32);

isTidy(1024);

isTidy(3445);

isTidy(13579);

//Chalenge 8

function isJumping(number) {
  if (number < 10) {
    return "JUMPING";
  }
  number = number.toString();
  let numberArray = number.split("");
  for (let i = 1; i < numberArray.length; i++) {
    numberArray[i] = Number(numberArray[i]);
    numberArray[i - 1] = Number(numberArray[i - 1]);
    if (numberArray[i - 1] === 9 && numberArray[i] === 0) {
      return "NOT JUMPING";
    }
    if (
      numberArray[i - 1] - numberArray[i] !== 1 &&
      numberArray[i] - numberArray[i - 1] !== -1 &&
      numberArray[i - 1] - numberArray[i] !== -1 &&
      numberArray[i] - numberArray[i - 1] !== 1
    ) {
      return "NOT JUMPING";
    }
  }
  return "JUMPING";
}

isJumping(9);

isJumping(79);

isJumping(23454);
