"use strict";

//CHALLENGE 1

function getDrinks(numberOfGuests) {
  let drinks = 0;
  for (let i = 0; i <= numberOfGuests; i++) {
    drinks = drinks + i;
  }
  return drinks;
}

console.log(getDrinks(5));

// CHALLENGE 2

function getDrinksWithStep(numberOfGuests, step) {
  let drinks = 0;
  for (let i = 0; i <= numberOfGuests; i = i + step) {
    drinks = drinks + i;
  }
  return drinks;
}

// console.log(getDrinksWithStep(5, 6));

// CHALLENGE 3

function calculateProfit(amount, percent, period) {
  let sum = amount;
  let profit = 0;
  for (let i = 0; i <= period; i++) {
    sum = sum + profit;
    profit = (sum * percent) / 100;
  }
  let netProfit = sum - amount;
  return netProfit;
}

calculateProfit(100, 5, 10);

// CHALLENGE

function countMs(text) {
  text = text.toLowerCase();
  let letter = "m";
  let number = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text[i] === letter) {
      number = number + 1;
    }
  }
  return number;
}

countMs("merMaids");
