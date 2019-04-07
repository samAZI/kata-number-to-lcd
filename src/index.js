const lcdDigitList = [
	require('./digits/0.js')(),
	require('./digits/1.js')(),
	require('./digits/2.js')(),
	require('./digits/3.js')(),
	require('./digits/4.js')(),
	require('./digits/5.js')(),
	require('./digits/6.js')(),
	require('./digits/7.js')(),
	require('./digits/8.js')(),
	require('./digits/9.js')()
]

const numberToLcd = function (number) {
	return lcdDigitList[number]
}

exports.numberToLcd = numberToLcd

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