"use strict";
let utils = require("./utils");

function solvePartOne(data) {
  data = data.split("\n");
  let horizontal = 0,
    depth = 0;
  data.forEach((instruction) => {
    let [direction, value] = instruction.split(" ").map((x, i) => (i == 0 ? x : +x));
    switch (direction) {
      case "forward":
        horizontal += value;
        break;
      case "down":
        depth += value;
        break;
      case "up":
        depth -= value;
        break;
    }
  });
  console.log(horizontal, depth);
  console.log(horizontal * depth);
}

function solvePartTwo(data) {
  data = data.split("\n");
  let horizontal = 0,
    depth = 0,
    aim = 0;
  data.forEach((instruction) => {
    let [direction, value] = instruction.split(" ").map((x, i) => (i == 0 ? x : +x));
    switch (direction) {
      case "forward":
        horizontal += value;
        depth += aim * value;
        break;
      case "down":
        aim += value;
        break;
      case "up":
        aim -= value;
        break;
    }
  });
  console.log(horizontal, depth);
  console.log(horizontal * depth);
}

let nullFn = () => null;
//utils.solve(__filename, solvePartOne, nullFn, false);
utils.solve(__filename, nullFn, solvePartTwo, false);
