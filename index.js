"use strict";

let arr = [];
let i, j, central, randomInt;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (randomInt = Math.floor(Math.random() * (max - min)) + min);
}

console.log(getRandomInt(2, 10));

for (let i = 0; i < randomInt; i++) {
  arr[i] = new Array(randomInt).fill("");
} // THIS MAKES A RANDOM EMPTY MATRIX

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    arr[i].splice((i, j), 1, randomInt * i + j + 1);
  }
} // THIS FILLS IT WITH ASCENDING NUMBERS

console.table(arr);

central = Math.ceil(arr.at(-1).at(-1) / 2);
console.log(central);
