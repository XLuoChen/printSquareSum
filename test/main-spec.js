'use strict';

const printOddsSum = require('../main/main');

describe('sumOfSqure', () => {

  it('should print sum of squares', () => {

    spyOn(console, 'log');

    printOddsSum([1, 2, 3, 4, 5]);

    const expectSummation = 35;

    expect(console.log).toHaveBeenCalledWith(expectSummation);
  })
});
