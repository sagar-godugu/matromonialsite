import { home } from "./home.js"
import login, { loginHandler } from "./login.js"
import { register, registerHandler } from "./register.js"

let allAnchors=document.querySelectorAll("a")
let root=document.querySelector("#root")

let allPages={
    '/login':[login,loginHandler],
    '/register':[register,registerHandler],
    '/home':[home],
}
function pageLoader(e){
    e.preventDefault()
    history.pushState(null,"",`${e.target.pathname}`)
    let path=window.location.pathname
    root.innerHTML=allPages[path][0]()

    if(allPages[path][1]){
        allPages[path][1]()
    }
    
}

allAnchors.forEach((a)=>{
    a.addEventListener('click',pageLoader)
})

window.addEventListener("popstate",(e)=>{
    let path=window.location.pathname
    if(path=='/index.html'){
        root.innerHTML=''
    }
    else{
    root.innerHTML=allPages[path][0]()
    }
})

// let data=[
//     {
//         name:'Sagar'
//     },
//     {
//         name:'Aravind'
//     },
//     {
//         name:'Srinu'
//     },
//     {
//         name:'Sagar'
//     },
//     {
//         name:'Aravind'
//     },
//     {
//         name:'Srinu'
//     },
// ]
// let stringData=()=>{
//     return data.map((user)=>{
//         return `
//         <div class='card'>
//         <h1>${user.name}</h1>
//         </div>
//         `   
//     }).join('')
// }
// root.innerHTML=`
// <div class='cardContainer'>
// ${stringData()}
// </div>
// `


