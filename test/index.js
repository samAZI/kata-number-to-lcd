const assert = require('assert');
const { manyNumberToLcd, numberToLcd } = require('../src/');
const digitList = [`
 _ 
| |
|_|
`,`
 
|
|
`,`
 _ 
 _|
|_ 
`,`
 _ 
 _|
 _|
`,`
   
|_|
  |
`,`
 _ 
|_ 
 _|
`,`
 _ 
|_ 
|_|
`,`
 _ 
  |
  |
`,`
 _ 
|_|
|_|
`,`
 _ 
|_|
 _|
`
]

describe('Convert Number to LCD', function () {

	describe('numberToLcd', function () {

			function testDigitConvertion(expectedDigit, currentNumber) {
				it(`number ${currentNumber}`, function (done) {
					const result = numberToLcd(currentNumber)

					assert.equal(result, expectedDigit)
					done()
				})
			}

			digitList.forEach(function(digit, index) {
				testDigitConvertion(digit, index)
			})

	})

	describe.only('manyNumberToLcd', function () {
		it ('should return 42 in digit', function () {
			const result = manyNumberToLcd(42)
			const expectedResult  = `
    _ 
|_| _|
  ||_ 
`
			assert.equal(result, expectedResult)

		})
	})


})

