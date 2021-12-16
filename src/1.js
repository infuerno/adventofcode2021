"use strict";
let utils = require("./utils");

function solvePartOne(data) {
  data = data.split("\n").map((x) => +x);
  let increases = data.reduce((acc, cur, i) => {
    if (i > 0 && cur > data[i - 1]) {
      acc++;
      console.log(`${cur} (increased); ${acc}`);
    } else {
      console.log(cur);
    }
    return acc;
  }, 0);
  console.log(increases);
}

function solvePartTwo(data) {
  data = data.split("\n").map((x) => +x);
  let increases = data.reduce((acc, cur, i) => {
    if (i == 0 || i == 1) {
      return acc;
    }
    if (i == 2) {
      let sum = data[i] + data[i - 1] + data[i - 2];
      console.log(`${sum} (N/A - no previous sum)`);
      return acc;
    }
    let sum1 = data[i - 1] + data[i - 2] + data[i - 3];
    let sum2 = data[i] + data[i - 1] + data[i - 2];
    if (sum2 > sum1) {
      console.log(`${sum2} (increased)`);
      acc++;
    } else {
      console.log(sum2);
    }
    return acc;
  }, 0);
  console.log(increases);
}

let nullFn = () => null;
//utils.solve(__filename, solvePartOne, nullFn, false);
utils.solve(__filename, nullFn, solvePartTwo, false);
