const assert = require('assert');
const { numberToLcd } = require('../src/');
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

describe('numberToLcd', function () {

	describe('one digit at time', function () {

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


})

