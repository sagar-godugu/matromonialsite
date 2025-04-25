import login from "./login.js"

export let register=()=>{
  
    return `
      <div class="registerFormContainer">
            <form action="">
                <div>
                <h1>Registration Form</h1>
                <img src='' >
                </div>
                
                <div>
                    <input type="text" placeholder="Enter Name" name="name" required>
                </div>

                <div>
                    <input type="email" placeholder="Enter email" name="email" required>
                </div>

                <div>
                    <input type="password" placeholder="Enter Password" name="password" required>
                </div>

                <div>
                    <input type="text" placeholder="Enter age" name="age" required>
                </div>

                <div>
                    <div><span>Male</span><input type="radio" value="Male" name="gender"></div>
                    <div><span>Female</span><input type="radio" value="Female" name="gender"></div>
                    <div><span>Other</span><input type="radio" value="Other" name="gender"></div>
                </div>

                <div>
                    <input type="text" placeholder="Enter Job" name="job" required>
                </div>

                <div>
                    <input type="text" placeholder="Enter Education Details" name="educationQualification" required>
                </div>

                <div>
                    <select name="zodiacSign">
                    <option value="">Select Zodiac Sign</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="piscos">piscos</option>

                </select>
                </div>

                <div>
                    <input type="text" placeholder="Enter religion" name="religion">
                </div>

                <div>
                    <textarea placeholder="Describe your self" name="about"></textarea>
                </div>

                <div>
                    <textarea placeholder="Describe family" name="family"></textarea>
                </div>

                <div>
                    <textarea placeholder="Enter your area/locality" name="area" required></textarea>
                </div>

                <div>
                    <input type="text" placeholder="Enter state" name="state" required>
                </div>

                <div>
                    <input type="text" placeholder="Enter pin" name="pin" required>
                </div>

                <div>
                    <div><label for="hobbies"></label>Hobbies</div>
                    <div>
                        <input type="checkbox" name="hobbies" value='Cricket' ><span>Cricket</span>
                        <input type="checkbox" name="hobbies" value="BGMI"><span>BGMI</span>
                        <input type="checkbox" name="hobbies" value="Music"><span>Music</span>
                        <input type="checkbox" name="hobbies" value="Movies"><span>Movies</span>
                        <input type="checkbox" name="hobbies" value="Football"><span>Football</span>
                        <input type="checkbox" name="hobbies" value="Webseries"><span>Webseries</span>
                        <input type="checkbox" name="hobbies" value="Anime"><span>Anime</span>
                        <input type="checkbox" name="hobbies" value="Travelling"><span>Travelling</span>
                        <input type="checkbox" name="hobbies" value="Sleeping"><span>Sleeping</span>
                    </div>
                </div>


                <div>
                    <div><label for="interests"></label>Intrests</div>
                    <div>
                        <input type="checkbox" name="interests" value="Cricket"><span>Cricket</span>
                        <input type="checkbox" name="interests" value="BGMI"><span>BGMI</span>
                        <input type="checkbox" name="interests" value="Music"><span>Music</span>
                        <input type="checkbox" name="interests" value="Movies"><span>Movies</span>
                        <input type="checkbox" name="interests" value="Football"><span>Football</span>
                        <input type="checkbox" name="interests" value="Webseries"><span>Webseries</span>
                        <input type="checkbox" name="interests" value="Anime"><span>Anime</span>
                        <input type="checkbox" name="interests" value="Travelling"><span>Travelling</span>
                        <input type="checkbox" name="interests" value="Sleeping"><span>Sleeping</span>
                    </div>
                </div>
                
                <div>
                    <input type="file" name="image">
                </div>

                <div>
                   <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    `
    
}

export let registerHandler=()=>{
    let state={
        name:"",
        email:"",
        age:"",
        password:"",
        gender:"",
        job:"",
        educationQualification:"",
        zodiacSign:"",
        religion:"",
        about:"",
        family:"",
        area:"",
        state:"",
        pin:"",
        hobbies:[],
        interests:[],
        image:"",
        setState(name,value){
            if(name!='hobbies' && name!='interests'){
                this[name]=value
            }
        },
        setCheckBox(name,value,isChecked){
        isChecked?this[name].push(value):this[name]=this[name].filter((val)=>val!=value)
        }
    
    }
    let allInputs=document.querySelectorAll("input")
    let allCheckBoxes=document.querySelectorAll("input[type='checkbox']")
    let textAreas=document.querySelectorAll("textarea")
    let select=document.querySelector("select")
    let form=document.querySelector('form')
    let img=document.querySelector("img")
    
    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        if(name=='image'){
            let file=e.target.files[0]
            value=file
            let reader=new FileReader()
            reader.onload=function(){
                img.src=reader.result
                img.style.height='50px'
                img.style.width='50px'
            }
            reader.readAsDataURL(value)
            
        }
        state.setState(name,value)
    }
    
    let handleCheckBoxes=(e)=>{
        let name=e.target.name
        let value=e.target.value
        let isChecked=e.target.checked
    
        state.setCheckBox(name,value,isChecked)
    }
    
    
    let handleSubmit=(e)=>{
        e.preventDefault();

        if(state.hobbies.length!=5 || state.interests.length!=5){
            alert("Choose exactly 5 hobbies and interests ...! ")
            return
        }
        
        let payLoad={
            name:state.name,
            email:state.email,
            age:state.age,
            password:state.password,
            gender:state.gender,
            job:state.job,
            educationQualification:state.educationQualification,
            zodiacSign:state.zodiacSign,
            religion:state.religion,
            about:state.about,
            family:state.family,
            area:state.area,
            state:state.state,
            pin:state.pin,
            hobbies:state.hobbies,
            interests:state.interests,
            image:state.image,
        
        };
        let formData=new FormData()
    
        for(let data in payLoad){
            if(data=='hobbies' || data=='interests'){
                formData.append(data,JSON.stringify(payLoad[data]))
            }
            else{
                formData.append(data,payLoad[data])
            }
        };
        try{
            (async()=>{
                let res=await fetch("http://127.0.0.1:8000/api/auth/register/",{
                    method:"POST",
                    body:formData,
                })
            let newdata=await res.json()
            console.log(newdata)
            }
            )();
        }
        catch(error){
            console.log(error)
            alert('something went wrong')
        }

        history.pushState(null,"","/login")
        root.innerHTML=login()
    
    }
    
    allInputs.forEach((inp)=>{
        inp.addEventListener('change',handleChange)
    })
    
    allCheckBoxes.forEach((checkbox)=>{
        checkbox.addEventListener('change',handleCheckBoxes)
    })
    
    textAreas.forEach((textarea)=>{
        textarea.addEventListener('change',handleChange)
    })
    
    select.addEventListener('change',handleChange)

    form.addEventListener("submit",handleSubmit)
} 