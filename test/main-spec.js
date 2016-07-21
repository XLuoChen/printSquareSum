'use strict';

const getSumOfSquare = require('../main/main');

describe('sumOfSqure', () => {

  let numbers;

  beforeEach(() => {
    numbers = [1, 2, 3, 4, 5];
  });

  it('should get odd numbers', () => {

    const odds = getSumOfSquare.getOdds(numbers);

    expect(odds).toEqual([1, 3, 5]);
  });

  it('should build square', () => {

    const squares = getSumOfSquare.buildSquares([1, 3, 5]);

    expect(squares).toEqual([1,9,25]);
  });

  it('should build summation', () => {

    const summations = getSumOfSquare.buildSummation([1, 9, 25]);

    expect(summations).toEqual(35);
  });

  it('should print sum of squares', () => {

    spyOn(console, 'log');

    const expectSummation = 35;

    getSumOfSquare.printSum(numbers);

    expect(console.log).toHaveBeenCalledWith(expectSummation);
  })
});
