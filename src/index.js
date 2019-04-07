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

exports.numberToLcd = function (number) {
	return lcdDigitList[number]
}