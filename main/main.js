'use strict';

function printSum(numbers) {
  const odds = getOdds(numbers);
  const squares = buildSquares(odds);
  const summation = buildSummation(squares);

  console.log(summation);
}

function getOdds(numbers) {
  const oddNumbers = [];

  for (const number of numbers) {
    if (number % 2 === 1) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

function buildSquares(odds) {
  return odds.map(odd => odd * odd);
}

function buildSummation(squares) {
  let summation = 0;
  for(const square of squares){
    summation += square;
  }

  return summation;
}

module.exports = {
  printSum:printSum,
  getOdds: getOdds,
  buildSquares:buildSquares,
  buildSummation:buildSummation
};
