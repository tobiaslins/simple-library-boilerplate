const expect = require('chai').expect;

const library = require('../src/calculator');

describe('All tests from boilerplate', () => {
  it('should add correctly', () => {
    expect(library.add(1, 2)).to.equal(3);
  });
});
