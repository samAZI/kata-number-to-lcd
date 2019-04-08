const lcdDigitList = require('./digits')

const numberToDigit = function (number) {
    return lcdDigitList[number]
}

const resizeDigitWidth = function (digit, width) {
    if (digit === numberToDigit(1)) {
        return digit
    }

    const height = 3
    const digitSplit = digit.split('\n')
    let digitResize = '\n'

    // iterate though every lines
    for (let heightIterator = 0; heightIterator < height; heightIterator++) {
        const heightIndex = heightIterator + 1
        let line = digitSplit[heightIndex].charAt(0)
        const character = digitSplit[heightIndex].charAt(1)

        // iterate though every columns
        for (let widthIterator = 0; widthIterator < width; widthIterator++) {
            line += character
        }
        line += digitSplit[heightIndex].charAt(digitSplit[heightIndex].length - 1)
        digitResize += `${line}\n`
    }

    return digitResize

}

const manyNumberToDigit = function (numbers) {
    let line1 = ''
    let line2 = ''
    let line3 = ''

    for (let number of numbers) {
        const digitSplit = numberToDigit(Number(number)).split('\n')
        line1 += digitSplit[1]
        line2 += digitSplit[2]
        line3 += digitSplit[3]
    }

    return `\n${line1}\n${line2}\n${line3}\n`
}

module.exports = {
    numberToDigit,
    manyNumberToDigit,
    resizeDigitWidth,
}