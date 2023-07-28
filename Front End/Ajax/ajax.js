// client server Architecture

// client ----> server

// 1.  one way communication(only client send request to server) 
// the communication starts by client sending request to server and server responds to client request i.e the comm. never starts from server end

// 2.  server can reject the client request (this could be due to server faliure (500) or bad request from client(400-490))

// Any http request contain two major block 
// 1. request header -> contains metadata related to request body and request types 
// 2. request body -> the body containing additional information to be added or removed 

// HTTP Methods :- There are 4 Methods

// 1. GET -> Read any resource from the server
// 2. POST -> add a new resource to the server
// 3. PUT/PATCH -> edit an existing resource in the server
// 4. DELETE -> delete a specific resource n the server

// NOTE :- The request body contain values like resource to be added , resource to be edited or resource to be deleted 

//Response CODE
// 1. Informational responses (100 – 199)
// 2. Successful responses (200 – 299) --> when request is accepted it is given (code 200 mean okay if we get code 200 our req is accepted)
// 3. Redirection messages (300 – 399)
// 4. Client error responses (400 – 499)-->(bad request, unauthorized etc.)
// 5. Server error responses (500 – 599)-->(internal server error, gateway timout etc.)
// Class 2, 4, 5, are the most important class which is to be used

// XMLHttpRequest: readyState property
// VALUE |  STATE                | DESCRIPTION
//     0 |	UNSENT	             | Client has been created. open() not called yet.
//     1 |	OPENED	             | open() has been called.
//     2 |	HEADERS_RECEIVED	 | send() has been called, and headers and status are available.
//     3 |	LOADING	Downloading; | responseText holds partial data.
//     4 |	DONE	             | The operation is complete.

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+++-+-+-+-+-+-+-++--+-+-+-+-+--+-+-+-+-+-+-+-+--+--+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+

// AJAX :- Asynchronous JavaScript aand XML
// A way or technique to integrate an API to a FE application

// Step 1. Create an object of XMLHttpRequest()
const xhr = new XMLHttpRequest();
const url = 'https://api.github.com/users'
console.log(`First readyState --> ${xhr.readyState}`);
// readyState = 0

// Step 2. Open the portal of communication b/w client and server
xhr.open('GET', url)
console.log(`Second readyState --> ${xhr.readyState}`);
// readyState = 1
// Additional step - Set your request headers --> setRequestHeaders

// Step 3. Perform an action over request state change
xhr.onreadystatechange = () => { // Its a callbackfn and waiting for ready state to be changed to 4
    // 2 --> 3 --> 4
    console.log(`Remaining readyState --> ${xhr.readyState}`);
    if (xhr.readyState == 4 && xhr.status == 200) 
    {
        // I will get the response from the server --> responseText
        // Send the Request
        const jsonRes = xhr.responseText;
        const res = JSON.parse(jsonRes)

        let output = ''
        for (let i = 0; i < res.length; i++) 
        {
            output += `
            <div style = "margin: 10px;">
                <img src = "${res[i].avatar_url}" /> <br/>
                <p class = 'lead'>${res[i].login}</p>
            </div>
        `
        }
        console.log(output);
        document.getElementById('my-div').innerHTML = output

        // const userImg = document.createElement('img')
        // userImg.setAttribute('src', res[0].avatar_url)
        // const userName = document.createElement('h4')
        // userName.textContent = res[0].login

        // console.log(userName);
        // console.log(userImg);
        // console.log(res);
    }
}
xhr.send()