const  {manyNumberToDigit } = require('./number-to-lcd')

const argv = process.argv.slice(2)

if (argv.length === 0) {
    console.info('Usage ./src/index.js numbers[Integer] width[Integer](default:1) height[Integer](default:1)')
} else {
    const numbers = argv[0]
    const width = argv[1] || 1
    const height = argv[2] || 1
    const lcdDigits = manyNumberToDigit(numbers,{ width, height })
    console.info(lcdDigits)
}