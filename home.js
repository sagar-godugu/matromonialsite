
import logout from "./logout.js";

export let home=()=>{
    (async ()=>{
        let res=await fetch("http://192.168.4.220:8000/api/auth/filtered-users/",{
            method:"GET",
            headers:{
            "Authorization":`Token${window.sessionStorage.getItem('token')}`,
            },
            })
            let data=await res.json()
            console.log(data)
            let stringData=data.map((user)=>{
                    return `
                    
                    <div class='card' customid=${user.id}>
                        <div>
                            <img src=${user.image}>
                        </div>
                        <div>
                            <p>Name: ${user.name}</p>
                            <p>Age: ${user.age}</p>
                        </div>
                        <div>
                            <p>Profession: ${user.job}</p>
                        </div>
                        <div>
                            <p>ZodiacSign: ${user.zodiacSign}</p>
                        </div>
                        <div>
                            <p>Religion: ${user.religion}</p>
                        </div>
                        <div>
                            <p>State: ${user.state}</p>
                        </div>
                    </div>
                    `   
                }).join('')

            root.innerHTML=`
             <div class="home-nav">
                <div>
                    <img src="./pasandita.png" height='40px' width='100px'>
                </div>
                <div>
                    <input type='search' placeholder='search' name='search'>
                </div>
                <div>
                    <a href="login" id='logout' >Logout</a>
                </div>
                <div>
                    
                    <img src=${window.sessionStorage.getItem('image')}>
                </div>
            </div>
            <div class='cardContainer'>
           
            ${stringData}
            </div>
            `
        // let cards=document.querySelectorAll('.card')
        // cards.forEach((card)=>{
        //     card.addEventListener('click',(e)=>{
        //         history.pushState(data,'customid','/profile')
        //     })
        // })

        let logoutbtn=document.querySelector("#logout")
        logoutbtn.addEventListener('click',(e)=>{
        e.preventDefault()
        logout()
        })
            
        
    })(); 
    
}

