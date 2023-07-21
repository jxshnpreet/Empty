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

// Strings can be written in 3 ways
// 1. ''
// 2. ""
// 3. ``