
// console.dir(document);
// console.log(document.URL);
// console.log(document.all);

// const myHeading = document.all[4];
// document.all[4].textContent = "Welcome to DOM"
// console.log(myHeading)

// const myLi = document.all[27]
// console.log(myLi);

// Identifier Methods :-
// 1. getElementById()
// const myHeader = document.getElementById('header-title')
// console.log(myHeader);

// 2. getElementsByClassName()
const listItem = document.getElementsByClassName('list-group-item')
console.log(listItem);

// 3. getElementsByTagName()
const myForms = document.getElementsByTagName('form')
console.log(myForms);

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('#header-title')
// console.log(myHeader);

console.log(document.querySelector('.list-group-item'));

// 5. querySelectorAll
console.log(document.querySelectorAll('.list-group-item'));

// DOM MANIPULATION METHODS :-
// const heading = document.querySelector('#header-title')

// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = "Welcome to DOM"

// 2. innerHtml -> 
// heading.innerHTML = '<h2>Welcome to DOM</h2>'

// NOTE :- textContent changes the text b/w <> and </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
// const secondHeading = document.querySelector('#second-heading')

// // JS Function - setTimeOut()
// // Syntax -> setTimeOut(callfn, timeoutDelay (in ms))
// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)

// setTimeout( () => {
//     heading.innerHTML = '<h2>Welcome to DOM</h2>'
// }, 5000)

// const listItems = document.getElementsByClassName('list-group-item')
// for (let i = 0; i < listItems.length; i++)
// {
//     // odd items
//     if(i%2 == 0)
//     {
//         listItems[i].style.backgroundColor = 'grey'
//     }
    
// }

//-- another method using array methods
// const listArray = []
// for (let i = 0; i < listItems.length; i++) 
// {
//     listArray.push(listItems[i])
// }
// listArray.forEach((item, index)=>  
// {
//     if (index %  2 != 0)
//     {
//         listArray[index].style.backgroundColor = 'grey'
//     }
// })

// EVENTS IN DOM

const myBtn = document.getElementById('btn')

// element.addEventListener( eventName, () => {} )
// element.addEventListener( eventName , functionName )

// ES5 Syntax
// const clickEventHandler = function() {
//     console.log('My Button was Clicked!');
// }

myBtn.addEventListener( 'dblclick', () => {
    console.log('My Button was Clicked!');
} )

// myBtn.addEventListener( 'click', clickEventHandler)

// Submit button
document.querySelector("#submitBtn").addEventListener( 'click', () => {
    console.log('My Button was Clicked');
})

// Keyboard Events
