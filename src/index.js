const  { manyNumberToDigit } = require('./number-to-lcd')

const USAGE = 'Usage npm start numbers[Integer] width[Integer](default:1) height[Integer](default:1)'
const argv = process.argv.slice(2)

if (argv.length === 0) {
    console.info(USAGE)
} else {
    const numbers = argv[0]
    const width = argv[1] || 1
    const height = argv[2] || 1
    try {
        const lcdDigits = manyNumberToDigit(numbers,{ width, height })
        console.info(lcdDigits)
    } catch (err) {
        console.error(err)
        console.info(USAGE)
    }
}