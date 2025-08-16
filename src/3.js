"use strict";
let utils = require("./utils");

function getGammaEpsilon(data) {
  let gamma = "",
    epsilon = "";
  for (let i = 0; i < data[0].length; i++) {
    let sum = data.reduce((acc, cur) => {
      acc += +cur[i];
      return acc;
    }, 0);
    gamma += sum >= data.length / 2 ? "1" : "0";
    epsilon += sum >= data.length / 2 ? "0" : "1";
  }
  return [gamma, epsilon];
}

function solvePartOne(data) {
  data = data.split("\n");
  let [epsilon, gamma] = getGammaEpsilon(data);
  console.log(gamma, epsilon);
  console.log(parseInt(gamma, 2), parseInt(epsilon, 2));
  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
}

function solvePartTwo(data) {
  data = data.split("\n");
  console.log("data", data);
  let oxygen = [...data],
    co2 = [...data];
  let [epsilon, gamma] = getGammaEpsilon(data);
  for (let i = 0; i < epsilon.length; i++) {
    console.log("epsilon", epsilon);
    console.log("oxygen; checking i =", i);
    if (oxygen.length > 1) {
      for (let j = oxygen.length - 1; j >= 0; j--) {
        if (oxygen[j][i] !== epsilon[i]) {
          oxygen.splice(j, 1);
        }
      }
    }
    console.log("oxygen", oxygen);
    [epsilon] = getGammaEpsilon(oxygen);
  }
  for (let i = 0; i < gamma.length; i++) {
    console.log("gamma", gamma);
    console.log("co2; checking i =", i);
    if (co2.length > 1) {
      for (let j = co2.length - 1; j >= 0; j--) {
        if (co2[j][i] !== gamma[i]) {
          co2.splice(j, 1);
        }
      }
    }
    console.log("co2", co2);
    [, gamma] = getGammaEpsilon(co2);
  }
  console.log(parseInt(oxygen[0], 2), parseInt(co2[0], 2));
  console.log(parseInt(oxygen[0], 2) * parseInt(co2[0], 2));
}

let nullFn = () => null;
//utils.solve(__filename, solvePartOne, nullFn, false);
utils.solve(__filename, nullFn, solvePartTwo, false);
