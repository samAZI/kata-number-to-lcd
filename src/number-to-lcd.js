const lcdDigitList = require('./digits')

const SPACE = ' '
const CARRIAGE_RETURN = '\n'

const numberToDigit = function (number) {
    return lcdDigitList[number]
}

const resizeDigitWidth = function (digit, width) {
    // No width resizing for digit 1
    if (digit === numberToDigit(1)) {
        return digit
    } else if (width <= 1) {
        return digit
    }

    const digitSplit = digit.split(CARRIAGE_RETURN)
    const height = digitSplit.length - 2 // remove extra \n at start and end
    let digitResize = CARRIAGE_RETURN

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
    const digitSplit = digit.split(CARRIAGE_RETURN)
    let digitResize = CARRIAGE_RETURN
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
    digitResize += `${downLine.charAt(0)}${downLine.charAt(1)}${downLine.charAt(lineWidth - 1)}\n`
    return digitResize
}

const resizeDigit = function (digit, options) {
    if (!options) {
        return digit
    }
    // at least width or height is given by user input
    const { width = 1, height = 1 } = options // we set missing default value by precaution
    return resizeDigitWidth(resizeDigitHeight(digit, height), width)
}

const manyNumberToDigit = function (numbers, options) {
    const digitLines = []
    let numberIndex = 0

    // fill every digit lines
    for (const number of numbers) {
        // get right sized digit
        const resizedDigit = resizeDigit(numberToDigit(Number(number)), options)
        const digitSplit = resizedDigit.split(CARRIAGE_RETURN)

        for (let heightIndex = 1; heightIndex < digitSplit.length - 1; heightIndex++) {
            // first digit position y=0 x=0 need \n and to be assigned
            if (numberIndex === 0 && heightIndex === 1 && !digitLines[heightIndex]) {
                digitLines[heightIndex] = CARRIAGE_RETURN + digitSplit[heightIndex] + SPACE

            // other first digit in position y need to be assigned
            } else if (!digitLines[heightIndex]) {
                    digitLines[heightIndex] = digitSplit[heightIndex]  + SPACE

            // if its not the last word, a space to improve lisibility
            } else if (numberIndex + 1 < numbers.length) {
                digitLines[heightIndex] += digitSplit[heightIndex] + SPACE

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