const lcdDigitList = require('./digits')

const numberToLcd = function (number) {
	return lcdDigitList[number]
}

const manyNumberToLcd = function (numbers) {
	let line1 = ''
	let line2 = ''
	let line3 = ''

	for (let number of numbers) {
		const digitSplitted = numberToLcd(Number(number)).split('\n')
	  line1 += digitSplitted[1]
	  line2 += digitSplitted[2]
	  line3 += digitSplitted[3]
	}

	return `\n${line1}\n${line2}\n${line3}\n`
}

module.exports = {
	numberToLcd,
	manyNumberToLcd,
}