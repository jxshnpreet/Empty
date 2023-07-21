// Not completely object oriented 
// everything you can see is an object in js
// interpreted language
// 

// Print values in the console :-
console.log('This is a log!') 
console.warn('This is a warn') //shows output as a warning
console.error('This is an error') //shows output as an error

// Data types :-
// 1. Primitive Data Types (PDTs) :-

// i. Number
variable_one = 100
console.log(variable_one)

// ii. String
variable_one = 'Hello World'
console.log(variable_one)
console.log(typeof(variable_one))

// iii. Boolean
variable_two = true
console.log(typeof(variable_two))

// iv. Null --> variable exist but the value inside it doesn't exist
variable_three = null
console.log(variable_three)
console.log(typeof(variable_three))

// v. undefined --> which means variable doesn't exist 
variable_four = undefined
console.log(variable_four)

// Conditional Statements :-

// ES5 Syntax
var demo = 10
if(demo >= 0){
    console.log(demo + ' is a +ve number')
}
else{
    console.log(demo + ' is a -ve number')
}

// ES6 Syntax
// condition ? True : False
// Limitations :- True / False statements one-liner statement

demo = -10
demo >= 0 ? console.log(`${demo} + is a +ve no. `) : console.log(`${demo} + is -ve no. `)

// Strings can be written in 3 ways :- 1. '' 2. "" 3. `` 

// Keywords in JS :- 
// 1. let :- privste keyword access within a defined scope
// 2. var :- public once defined can be access anywhere
// 3. const :- it should be declared as well as defined , and value can't be changed once defined
flag = true
if (flag) {
    let a = 10;
    console.log(`The value of a inside if-block is ${a}`);
}
else{
    b = 5
}

// Loops

for (let i = 0; i < 5; i++) {
    console.log(i);  
}

let i = 0
while (i<5) {
    console.log(i);
    i += 1
}

// Non-Primitive Data Types (Non-PDTs)
// a.) Arrays
let numbers = [10, 20, 30, 40, 50]
let arr = []
let arrObj = new Array(10)

console.log(numbers)
console.log(arr)
console.log(arrObj)

// for (let i = 0; i < 5; i++) {
//     console.log(numbers[i]);
// }

// Array Methods 
numbers.push(60)
console.log(numbers);

let myArr1 = [100, 200, 300, 400, 500]
// let myArr2 = myArr1  This is not a copy Mech.
// Arrat Spread Operator
let myArr2 = [ ...myArr1 ]
myArr1.push(-10)
myArr2.push(1000)
console.log(myArr1);
console.log(myArr2);

myArr1.pop()
console.log(myArr1);

let deletedElement = myArr1.shift()
console.log(myArr1);

let newLength = myArr1.unshift(50)
console.log(newLength);
console.log(myArr1);

let num1 = myArr1.concat(myArr2)
console.log(num1);
