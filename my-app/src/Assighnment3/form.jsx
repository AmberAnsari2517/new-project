import { useState } from "react";
export const Valform =()=>{
    const[firstName, setfirstName]=useState("")
    const [lastName, setlastName]=useState("")
    const [Passwrod , setPassword]= useState("")
    const [Email, setEmail]= useState("")

    const handleButton =(e)=>{
      
        e.preventDefault();
       
        if(Passwrod.length<5){
            alert("maximum length is five")
            return;
        }
        else
        {
            alert('form is submit')
        }
        
    }

    return(
        <div>
            <form onSubmit={handleButton}>
            <input type='text' value={firstName} placeholder='First name' required
            onChange={(e)=>setfirstName(e.target.value)}/>
             <input type='text' value={lastName} placeholder='Last name' required
            onChange={(e)=>setlastName(e.target.value)}></input>
            <input type="email" value={Email} placeholder="enter email" required
            onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input type="password" value={Passwrod} placeholder="enter a password" required
            onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit" >Submit</button>
            </form>
        </div>
    
    )
}