#!/usr/bin/env node
import TheMath from 'the-math';

/* eslint-disable no-console */

console.log('Initial project!');
console.log(process.argv);

const firstNumber = process.argv[2];
const secondNumber = process.argv[4];

const result = TheMath.sum(Number(firstNumber), Number(secondNumber));

console.log('Result: %d', result);
