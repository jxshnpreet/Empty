
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
// const listItem = document.getElementsByClassName('list-group-item')
// console.log(listItem);

// 3. getElementsByTagName()
// const myForms = document.getElementsByTagName('form')
// console.log(myForms);

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('#header-title')
// console.log(myHeader);

// console.log(document.querySelector('.list-group-item'));

// 5. querySelectorAll
// console.log(document.querySelectorAll('.list-group-item'));

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

// const myBtn = document.getElementById('btn')

// element.addEventListener( eventName, () => {} )
// element.addEventListener( eventName , functionName )

// ES5 Syntax
// const clickEventHandler = function() {
//     console.log('My Button was Clicked!');
// }

// myBtn.addEventListener( 'dblclick', () => {
//     console.log('My Button was Clicked!');
// } )

// // myBtn.addEventListener( 'click', clickEventHandler)

// // Submit button
// document.querySelector("#submitBtn").addEventListener( 'click', (J) => {
//     J.preventDefault()
//     console.log('My Button was Clicked');
// })

// MOUSE EVENTS
// document.getElementById('text-input').addEventListener('mouseenter', () => { console.log('Cursror entered the element') })
// document.getElementById('text-input').addEventListener('mouseleave', () => { console.log('Cursror left the element') })

// JS is timebound language as it is interpreted it compile code line by line but if there's delay on any line to compile then it will
// run next line.... this can be explained with example given below...
// as there is delay of 3s so it compile mext line and then comeback again after the delay...
// setTimeout( () => {
//     console.log('Callback was excellent..');
// }, 3000)
// console.log('Callback after excellent..');

// Keyboard Events
// document.getElementById('text-input').addEventListener( 'copy', () => {
//     console.log('Content is copied');
// })
// document.getElementById('text-input').addEventListener( 'cut', () => {
//     console.log('Content is cut');
// })
// document.getElementById('text-input').addEventListener( 'paste', () => {
//     console.log('Content is paste');
// })
// // document.getElementById('text-input').addEventListener( 'keydown', () => {
// //     console.log('Down key is pressed');
// // })
// document.getElementById('text-input').addEventListener( 'keypress', () => {
//     console.log('Key is pressed');
// })

// document.getElementById("text-input").addEventListener('keypress', (e)=>{  // this will print the run time value in console...
//         console.log(e.target.value)
// })

// this will print the value written in text box after run time
// document.getElementById('submitBtn').addEventListener('click',(e) => {
//     e.preventDefault()
//      console.log(document.getElementById('text-input').value)
//  })

// FUN ACTIVITY
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     console.log(e);
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
// })
// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     document.querySelector('#container-box').style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`   
// })

// DOM Traversals

// // 1. parentElement
// console.log(document.getElementById('items').parentElement)

// // 2. children
// const items = document.getElementById('items').children
// for(let i=0; i < items.length; i++) {
//     if(i % 2 == 0) {
//         items[i].style.backgroundColor = '#f4f4f4'
//     }
// }

// // 3. firstChild
// console.log(document.getElementById('items').firstChild)
// console.log(document.getElementById('items').firstElementChild)

// // 4. lastChild
// console.log(document.getElementById('items').lastChild)
// console.log(document.getElementById('items').lastElementChild)

// // 5. siblings -> previousSibling ; nextSibling
// console.log(document.getElementById('head').previousSibling)
// console.log(document.getElementById('head').previousElementSibling)
// console.log(document.getElementById('head').nextSibling)
// console.log(document.getElementById('head').nextElementSibling)

// console.log(document.getElementById('second-heading').previousElementSibling)

// console.log(document.getElementById('second-heading').parentElement.parentElement.parentElement);

// Creating HTML using JS 
// The div created is not the part of html it os the part of js
// const myDiv = document.createElement('div')
// myDiv.textContent = 'Demo-Text'
// myDiv.setAttribute('id','myDiv')
// myDiv.setAttribute('class','my-div-class')

// Adding above div to Html document
// document.getElementById('dummy-div').appendChild(myDiv)

// Item lister application
document.getElementById('submitBtn').addEventListener( 'click', (e) => {
    e.preventDefault()
    const text = document.getElementById('text-input').value
    const text_ul = document.createElement('li')
    text_ul.textContent = text
    text_ul.setAttribute('class','list-group-item')
    document.getElementById('items').appendChild(text_ul)
})

