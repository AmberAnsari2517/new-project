import { useState } from "react";
export const Qno14 = ()=>{
    const [password, setpassword] =useState('')
    const [login , setlogin] =useState('')
    const validPasswords = ['password123', 'secure123', '1122'];
    const handle=(e)=>{
        e.preventDefault();
        if(validPasswords.includes(password)){
            setlogin('loginsuccfully')
        }
        else{
            setlogin('incorrectpassword')
        }

    }
    return(
        <div style={{margin:30}}>
            <strong>Qno:14</strong><br/>
            <form onSubmit={handle}>
            <input placeholder="type password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button type="submit"> Submit</button>
        <span style={{color:'red'}}>{login}</span>
            </form>

        </div>
    )


}