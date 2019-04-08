# KataNumberToLcd

> Write a program that given a number (with arbitrary number of digits), converts it into LCD style numbers.

### Packages used
- __[mocha](https://github.com/mochajs/mocha)__ - JavaScript test framework running on Node.js.
- __[husky](https://github.com/typicode/husky)__ - Git hooks made easy

### Arguments

| Argument | Description                      | Required | Default   |
|----------|----------------------------------|----------|-----------|
| Numbers  | Numbers to convert in lcd format | true     | undefined |
| Width    | Digits width                     | false    | 1         |
| Height   | Digits height                    | false    | 1         |

### Run project
```
nvm use
npm install
npm start <numbers> <width> <height>
```


### Run tests
`npm run test`
