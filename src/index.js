
const args = process.argv;


exports.numberToLcd = function (number) {
	if (number === '1') {
		return `

|
|
`
	}
	return `
 _ 
 _|
|_ 
`

}