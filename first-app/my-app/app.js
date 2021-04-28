let logger=require('./logger');
let calculator=require('./calculator');
let ReverseString=require('./ReverseString')
let os=require('os');
logger.log('hello')
console.log('Addition of two numbers:-',calculator.targetedAdd(500,200));
console.log('Subtraction of two numbers:-',calculator.targetedSub(500,200));
console.log('Multiplication of two numbers:-',calculator.targetedMul(5,2));
console.log('Division of two numbers:-',calculator.targetedDiv(100,20));
console.log('Reversed String is:-',ReverseString.targetedreverseString('Good Morning Umme Athiya'));
console.log(os.freemem());
console.log(os.arch())