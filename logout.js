import login, { loginHandler } from "./login.js";

let logout=()=>{
    
    (async ()=>{
        const token=window.sessionStorage.getItem('token')
        if(!token){
            console.log('Invalid Token');
            return 
        }
        let res=await fetch("http://192.168.4.220:8000/api/auth/logout/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                "Authorization":`Token ${token}`,
            },
        })
        if(res.ok){
            sessionStorage.removeItem('token')
            let data=await res.json()
            history.pushState(null,'','/login')
            root.innerHTML=login()
            loginHandler()
            console.log(data)
            return data
        }
        else{
            console.error('Logout Failed')
        }
        
    })();

}
export default logout


    
