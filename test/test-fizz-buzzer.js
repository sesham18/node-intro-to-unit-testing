// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz for multiples of 15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 30, expected: 'fizz-buzz'},
      {a: 45, expected: 'fizz-buzz'}
    ];
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal('fizz-buzz');
    });
  }); 
  
  it('should return buzz for multiples of 5', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
        {a: 5, expected: 'buzz'},
        {a: 10, expected: 'buzz'},
        {a: 20, expected: 'buzz'}
    ]; 
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal('buzz');
    });
  }); 

  it('should returnt the number if not a multiple of 3, 5, or 15', function() {
    const normalCases = [
        {a: 47, expected: 47},
        {a: 92, expected: 92},
        {a: 2, expected: 2}
    ]; 
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal(input.a);
    });
  }); 
  it('should return fizz for multiples of 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
        {a: 3, expected: 'fizz'},
        {a: 6, expected: 'fizz'},
        {a: 9, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal('fizz');
    });
  }); 
    
  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});