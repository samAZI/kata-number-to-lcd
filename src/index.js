const lcdDigitList = require('./digits')

const numberToDigit = function (number) {
    return lcdDigitList[number]
}

const resizeDigitWidth = function (digit, width) {
    if (digit === numberToDigit(1)) {
        return digit
    }

    const digitSplit = digit.split('\n')
    const height = digitSplit.length - 2 // remove extra \n at start and end
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

const resizeDigitHeight = function (digit, height) {
    const digitSplit = digit.split('\n')
    let digitResize = '\n'
    const upperLine = digitSplit[2]
    const downLine = digitSplit[3]

    digitResize += `${digitSplit[1]}\n`
    for (let iteratorHeight = 0; iteratorHeight < height; iteratorHeight++) {
        digitResize += `${upperLine.charAt(0)} ${upperLine.charAt(2)}\n`
    }
    digitResize += ` ${upperLine.charAt(1)} \n`
    for (let iteratorHeight = 0; iteratorHeight < height; iteratorHeight++) {
        digitResize += `${downLine.charAt(0)} ${downLine.charAt(2)}\n`
    }
    digitResize += ` ${downLine.charAt(1)} \n`
    return digitResize
}

const resizeDigit = function (digit, { width, height }) {
    const digitResize = resizeDigitWidth(resizeDigitHeight(digit, height), width)
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
    resizeDigitHeight,
    resizeDigit,
}