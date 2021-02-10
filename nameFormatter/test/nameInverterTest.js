const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {

  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a single name when passed a single name with extra spaces', function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "Vanessa Yeung" ; 
    const expectedOutput = "Yeung, Vanessa";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

});

