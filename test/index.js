const assert = require('assert')
const { manyNumberToDigit, numberToDigit, resizeDigitWidth } = require('../src/')
const digitList = [`
 _ 
| |
|_|
`, `
  
 |
 |
`, `
 _ 
 _|
|_ 
`, `
 _ 
 _|
 _|
`, `
   
|_|
  |
`, `
 _ 
|_ 
 _|
`, `
 _ 
|_ 
|_|
`, `
 _ 
  |
  |
`, `
 _ 
|_|
|_|
`, `
 _ 
|_|
 _|
`
]

describe('Convert Number to LCD', function () {

    describe('numberToDigit', function () {

        function testDigitConvertion(expectedDigit, currentNumber) {
            it(`number ${currentNumber}`, function (done) {
                const result = numberToDigit(currentNumber)

                assert.equal(result, expectedDigit)
                done()
            })
        }

        digitList.forEach(function (digit, index) {
            testDigitConvertion(digit, index)
        })

    })

    describe('resizeDigitWidth', function () {

        it('should return 1 digit without resizing his width', function () {
            const width = 5
            const digit = numberToDigit('1')
            const result = resizeDigitWidth(digit, width)
            const expectedResult = `
  
 |
 |
`
            assert.equal(result, expectedResult)
        })

    })

    describe('manyNumberToDigit', function () {
        it('should return 42 in digit', function () {
            const result = manyNumberToDigit('42')
            const expectedResult = `
    _ 
|_| _|
  ||_ 
`
            assert.equal(result, expectedResult)

        })

        it('should return 4242 in digit', function () {
            const result = manyNumberToDigit('4242')
            const expectedResult = `
    _     _ 
|_| _||_| _|
  ||_   ||_ 
`
            assert.equal(result, expectedResult)

        })

        it('should return 123456789 in digit', function () {
            const result = manyNumberToDigit('123456789')
            const expectedResult = `
   _  _     _  _  _  _  _ 
 | _| _||_||_ |_   ||_||_|
 ||_  _|  | _||_|  ||_| _|
`
            assert.equal(result, expectedResult)

        })

    })


})

