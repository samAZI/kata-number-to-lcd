const assert = require('assert')
const { manyNumberToDigit, numberToDigit, resizeDigitWidth, resizeDigitHeight, resizeDigit } = require('../src/')
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
            it(`should return digit ${currentNumber}`, function (done) {
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

        it('should return digit 1 without resizing his width', function () {
            const width = 5
            const digit = numberToDigit('1')
            const result = resizeDigitWidth(digit, width)
            const expectedResult = `
  
 |
 |
`
            assert.equal(result, expectedResult)
        })

        it('should return digit 2 resizing his width to 3', function () {
            const width = 3
            const digit = numberToDigit('2')
            const result = resizeDigitWidth(digit, width)
            const expectedResult = `
 ___ 
 ___|
|___ 
`
            assert.equal(result, expectedResult)
        })

        it('should return digit 2 resizing his width to 5', function () {
            const width = 5
            const digit = numberToDigit('2')
            const result = resizeDigitWidth(digit, width)
            const expectedResult = `
 _____ 
 _____|
|_____ 
`
            assert.equal(result, expectedResult)
        })

        it('should return digit 3 resizing his width to 6', function () {
            const width = 6
            const digit = numberToDigit('3')
            const result = resizeDigitWidth(digit, width)
            const expectedResult = `
 ______ 
 ______|
 ______|
`
            assert.equal(result, expectedResult)
        })


        it('should return digit 9 resizing his width to 4', function () {
            const width = 4
            const digit = numberToDigit('9')
            const result = resizeDigitWidth(digit, width)
            const expectedResult = `
 ____ 
|____|
 ____|
`
            assert.equal(result, expectedResult)
        })

    })

    describe('resizeDigitHeight', function () {

        it('should return digit 2 resizing his height to 2', function () {
            const height = 2
            const digit = numberToDigit('2')
            const result = resizeDigitHeight(digit, height)
            const expectedResult = `
 _ 
  |
  |
 _ 
|  
|  
 _ 
`
            assert.equal(result, expectedResult)
        })

        it('should return digit 4 resizing his height to 2', function () {
            const height = 2
            const digit = numberToDigit('4')
            const result = resizeDigitHeight(digit, height)
            const expectedResult = `
   
| |
| |
 _ 
  |
  |
   
`
            assert.equal(result, expectedResult)
        })

        it('should return digit 9 resizing his height to 3', function () {
            const height = 3
            const digit = numberToDigit('9')
            const result = resizeDigitHeight(digit, height)
            const expectedResult = `
 _ 
| |
| |
| |
 _ 
  |
  |
  |
 _ 
`
            assert.equal(result, expectedResult)
        })

    })

    describe('resizeDigit', function () {

        it('should return digit 2 resizing his width to 3 and his height to 2', function () {
            const width = 3
            const height = 2
            const digit = numberToDigit('2')
            const result = resizeDigit(digit, { width, height })
            const expectedResult = `
 ___ 
    |
    |
 ___ 
|    
|    
 ___ 
`
            assert.equal(result, expectedResult)
        })
    })

    describe('resizeDigit', function () {

        it('should return digit 2 resizing his width to 3 and his height to 2', function () {
            const width = 10
            const height = 3
            const digit = numberToDigit('0')
            const result = resizeDigit(digit, { width, height })
            const expectedResult = `
 __________ 
|          |
|          |
|          |
            
|          |
|          |
|          |
 __________ 
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

