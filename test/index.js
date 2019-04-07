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

})

