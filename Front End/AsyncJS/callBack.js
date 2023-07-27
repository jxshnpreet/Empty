// an array Post is created and it include 5 objects...
const posts = [
{id: 1, name: "post 1", desc: "post 1 Desc"},   
{id: 2, name: "post 2", desc: "post 2 Desc"},
{id: 3, name: "post 3", desc: "post 3 Desc"},
{id: 4, name: "post 4", desc: "post 4 Desc"},
{id: 5, name: "post 5", desc: "post 5 Desc"}
]

// a function without delay
const greet = () => {
    console.log("Welcome to ASYNC JS");
}

// a function is created that will print the name of the post with delay of 3 sec
const getPost = () => {
    setTimeout(()=>{
        posts.forEach(post => console.log(post.name))
    }, 2000)
}

// a function is created that will add a new post to it with delay of 3 sec 
// Side Effect
const createPost = (post,Callbackfn) => (   //5 Sec
    setTimeout(() => {
        posts.push(post)    //3 Sec
        Callbackfn()        //2 Sec
    },3000)
)

// this function will print the incremented value after delay of 4s
// const getPost2 = () => {
//     setTimeout(()=>{
//         posts.forEach(post => console.log(post.name))
//     }, 4000)
// }

// calling of functions....
// here createpost is called first but due to delay given to it so it skiped the function
// and goes to next line and called getpost function and printed the elemnts after the delay of 2 seconds...
// but if we create another function without the delay then the function without delay will be executed first..
createPost({id:6, name: 'Post 6', desc: 'Post 6 Desc.'}, getPost ) 
// getPost2();
// getPost();
greet();