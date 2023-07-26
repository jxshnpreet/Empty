// Not completely object oriented 
// everything you can see is an object in js
// interpreted language

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

// 1. Array Methods 
numbers.push(60)
console.log(numbers);

let myArr1 = [100, 200, 300, 400, 500]
// let myArr2 = myArr1  This is not a copy Mech.
// Array Spread Operator
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

let dummyArray = [10, 'string', true, null, undefined, []]
console.log(dummyArray);

// let twoDArray = [ [10, 20, 30], [40, 50, 60], [70, 80, 90]]
// let twoDArray = [ [], [], [] ]

// console.log(twoDArray[1][1]);

// 2. JS Objects :-
// let myObj = { key: value1, key: value2 }
let yay = {
    name: 'new user',
    email: 'abc@gmail.com',
    password: '@#$',
    hobbies: ['Music' , 'Dance' , 'Gaming'],
    address: {
        street: 'Street - 1' ,
        City: 'Kharar',
    }
}
console.log(yay);
console.log(`Hi this is user ${yay.name}, my email is ${yay.email}, my password is ${yay.password} and hobbies are ${yay.hobbies}`);
console.log(yay.hobbies[1]);
console.log(yay.address.street);
console.log(yay.address.City);

let myObj = new Object()
myObj.name = 'User One'
myObj.email = 'userone@service.com'
myObj.password = 'examplepwd'
myObj.isEmployed = true
myObj.hobbies = ['Music', 'Reading Books', 'Travelling']
myObj.address = {
    street: 'Street - 1',
    city: 'Kharar',
    state: 'Punjab',
    pincodes: [1234, 5678]
}
console.log(myObj)

// console.log(`Hi, this is user ${myObj.name}, my email is ${myObj.email} & my password is ${myObj.password}`)
// console.log(myObj.hobbies[0])
// console.log(myObj.address.city)
// console.log(myObj.address.pincodes[1]);

// 3. Array of Objects :- [ {}, {}, {} ]
const users = 
[
    { name: 'new user',
    email: 'abc@gmail.com',
    password: '@#$',
    hobbies: ['Music' , 'Dance' , 'Gaming'],
    address: {
        street: 'Street - 1' ,
        City: 'Kharar',
        Pincode: [140301 , 160001]
    }},
    { name: 'new user 2',
    email: 'def@gmail.com',
    password: 'qwerty',
    hobbies: ['Music' , 'Dance' , 'Gaming'],
    address: {
        street: 'Street - 2' ,
        City: 'Kharar',
        Pincode: [140301 , 160001]
    }},
    { name: 'new user 3',
    email: 'ghi@gmail.com',
    password: '12345',
    hobbies: ['Music' , 'Dance' , 'Gaming'],
    address: {
        street: 'Street - 3' ,
        City: 'Kharar',
        Pincode: [140301 , 160001]
    }}
]
console.log(users[0].address.Pincode[0]);

// 4. JSON (JavaScript Object Notation)
// JS --> Interface --> JSON --> 2 Functions

// 1. stringify() -> AoO to JSON
const myJSONResponse = JSON.stringify(users);
console.log(myJSONResponse)

// 2. parse() -> JSON to AoO
const convertAoO = JSON.parse(myJSONResponse)
console.log(convertAoO)
