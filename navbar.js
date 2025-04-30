import { home } from "./home.js"
import login, { loginHandler } from "./login.js"
import { register, registerHandler } from "./register.js"

let navbar=()=>{
    return `
    <nav>
        <div>
             <img src="./pasandita.png" height='40px' width='100px'>
        </div>
        <div>
            <a href="login">Login</a>
            <a href="register">SignUp</a>
        </div>
    </nav>
    `
}
export default navbar

export let navBinder=()=>{
    let allAnchors=document.querySelectorAll("a")
    let search=document.querySelector("input[type='search']")
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
    console.log(path)
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

}