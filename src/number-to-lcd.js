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
    digitResize += `${upperLine.charAt(0)}${upperLine.charAt(1)}${upperLine.charAt(2)}\n`
    for (let iteratorHeight = 0; iteratorHeight < height; iteratorHeight++) {
        digitResize += `${downLine.charAt(0)} ${downLine.charAt(lineWidth - 1)}\n`
    }
    digitResize += `${downLine.charAt(0)}${downLine.charAt(1)}${downLine.charAt(2)}\n`
    return digitResize
}

const resizeDigit = function (digit, options) {
    if (!options) {
        return digit
    }
    const { width = 1, height = 1 } = options
    return resizeDigitWidth(resizeDigitHeight(digit, height), width)
}

const manyNumberToDigit = function (numbers, options) {
    const digitLines = []
    let numberIndex = 0

    // fill every digit lines
    for (const number of numbers) {
        const resizedDigit = resizeDigit(numberToDigit(Number(number)), options)
        const digitSplit = resizedDigit.split('\n')

        for (let heightIndex = 1; heightIndex < digitSplit.length - 1; heightIndex++) {
            // first digit position y=0 x=0 need \n and to be assigned
            if (numberIndex === 0 && heightIndex === 1 && !digitLines[heightIndex]) {
                digitLines[heightIndex] = '\n' + digitSplit[heightIndex] + ' '

            // other first digit in position y need to be assigned
            } else if (!digitLines[heightIndex]) {
                    digitLines[heightIndex] = digitSplit[heightIndex]  + ' '

            // if its not the last word, a space to improve lisibility
            } else if (numberIndex + 1 < numbers.length) {
                digitLines[heightIndex] += digitSplit[heightIndex] + ' '

            // last words don't need extra space
            } else {
                digitLines[heightIndex] += digitSplit[heightIndex]
            }
        }
        numberIndex++
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