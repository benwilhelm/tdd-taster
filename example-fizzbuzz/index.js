const { expect } = require('chai')

/*
  if num is divisible by 3, return 'fizz'
  if num is divisible by 5, return 'buzz'
  if num is divisible by both, return 'fizzbuzz'
  return num
*/
function fizzBuzz(num) {

  if (num % 15 === 0) {
    return 'fizzbuzz'
  }

  if (num % 3 === 0) {
    return 'fizz'
  }

  if (num % 5 === 0) {
    return 'buzz'
  }

  return num
}

describe('fizzBuzz()', () => {
  it("should return fizz if num is divisible by 3", () => {
    expect(fizzBuzz(3)).equal('fizz')
  })
  it('should return buzz if num is divisible by 5', () => {
    expect(fizzBuzz(5)).equal('buzz')
  })
  it('should return fizzbuzz if num is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).equal('fizzbuzz')
  })
  it('should return num if other conditions dont match', () => {
    expect(fizzBuzz(7)).equal(7)
  })
})


// Additional Exercise!
// Try writing a function called vowelCount, which takes a string as
// its first argument, and an optional boolean second argument called
// includeY. Returns the number of vowels in the string, optionally
// including Y in the count based on the value of includeY

function vowelCount(str, includeY) {

}

describe('vowelCount()', () => {
  it('...')
  it('...')
  it('...')
})



console.log('done')
