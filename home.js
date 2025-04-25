export let home=()=>{
    (async ()=>{
        let res=await fetch("http://192.168.0.211:5000/api/auth/filtered-users",{
            method:"GET",
            headers:{
            "Authorization":`Bearer ${window.sessionStorage.getItem('token')}`,
            },
            })

            let data=await res.json()
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
            // ]
            console.log(data)
            let stringData=data.map((user)=>{
                    return `
                    <div class='card'>
                    <h1>${user.name}</h1>
                    <img src=${user.image}>
                    </div>
                    `   
                }).join('')

            root.innerHTML=`
            <div class='cardContainer'>
            ${stringData}
            </div>
            `
            
    })();   
}

