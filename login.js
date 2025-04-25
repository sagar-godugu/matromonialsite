import { home } from "./home.js"

let login=()=>{
    return `
    <div class="loginFormContainer">
            <form action="">
                <div>
                    <h1>Login here..!</h1>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Enter E-Mail" required>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter Password" required>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    `
}
export let loginHandler=()=>{
    let allInputs=document.querySelectorAll('input')
    let form=document.querySelector('form')
    
    let state={
        setState(name,value){
            this[name]=value
        }
    }

    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        state.setState(name,value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()

        let payLoad={
            email:state.email,
            password:state.password
        };
        try{
            (async ()=>{
                let res=await fetch("http://127.0.0.1:8000/api/auth/login/",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(payLoad)
                })
                let data=await res.json()
                window.sessionStorage.setItem('token',`${data.token}`)
                console.log(data.token)
                console.log(data);
            })();

        }
        catch(error){
            console.log(error);
            alert("something went wrong !!!")
        }

        history.pushState(null,"",'/home')
        root.innerHTML=home()
    }

    allInputs.forEach((inp)=>{
        inp.addEventListener('change',handleChange)
    })
    form.addEventListener('submit',handleSubmit)
}
export default login
