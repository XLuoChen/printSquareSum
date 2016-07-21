'use strict';

function printOddsSum(numbers) {
  const oddsSquaresSum =
    numbers.filter(number => number % 2)
      .map(odd => odd * odd)
      .reduce((prev, curr) => prev + curr);

  console.log(oddsSquaresSum);
}

module.exports = printOddsSum;
