const assert = require('assert');
const { numberToLcd } = require('../src/');

describe('numberToLcd', function () {

	it('should return LCD format of 1', function () {
		const number = '1'
		const expectedResult = `

|
|
`
		const result = numberToLcd('1')

		assert.equal(result, expectedResult)

	})

	it('should return LCD format of 2', function () {
		const number = '2'
		const expectedResult = `
 _ 
 _|
|_ 
`
		const result = numberToLcd('2')

		assert.equal(result, expectedResult)

	})

})

