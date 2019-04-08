const lcdDigitList = require('./digits')

const numberToDigit = function (number) {
    return lcdDigitList[number]
}

const resizeDigitWidth = function (digit, width) {
    if (digit === numberToDigit(1)) {
        return digit
    } else if (width === 1) {
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
    if (height <= 1) {
        return digit
    }
    const digitSplit = digit.split('\n')
    let digitResize = '\n'
    const upperLine = digitSplit[2]
    const downLine = digitSplit[3]
    const lineWidth = digitSplit[2].length

    digitResize += `${digitSplit[1]}\n`
    for (let iteratorHeight = 0; iteratorHeight < height; iteratorHeight++) {
        digitResize += `${upperLine.charAt(0)} ${upperLine.charAt(lineWidth - 1)}\n`
    }
    digitResize += ` ${upperLine.charAt(1)} \n`
    for (let iteratorHeight = 0; iteratorHeight < height; iteratorHeight++) {
        digitResize += `${downLine.charAt(0)} ${downLine.charAt(lineWidth - 1)}\n`
    }
    digitResize += ` ${downLine.charAt(1)} \n`
    return digitResize
}

const resizeDigit = function (digit, options) {
    if (!options) {
        return digit
    }
    const { width = 1, height = 1 } = options
    return resizeDigitWidth(resizeDigitHeight(digit, height), width)
}

const manyNumberToDigit = function (numbers, options = {}) {
    const digitLines = []

    // fill every digit lines
    for (let number of numbers) {
        const resizedDigit = resizeDigit(numberToDigit(Number(number)), options)
        const digitSplit = resizedDigit.split('\n')

        for (let heightIterator = 0; heightIterator < digitSplit.length - 1; heightIterator++) {
            if (!digitLines[heightIterator]) {
                digitLines[heightIterator] = digitSplit[heightIterator]
            } else {
                digitLines[heightIterator] += digitSplit[heightIterator]
            }
        }
    }
    return digitLinesToString(digitLines)
}

const digitLinesToString= function (digitLines) {
    return digitLines.reduce((result, line) => {
        result += `${line}\n`
        return result
    }, '')
}

module.exports = {
    numberToDigit,
    manyNumberToDigit,
    resizeDigitWidth,
    resizeDigitHeight,
    resizeDigit,
}