import { useState } from "react";
export const Qno13 = ()=>{
    const [password, setPassword] = useState('')
    const [confirmpassword , setconfirmpassword]= useState('')
    const [passerror, setpasserror] =useState ('')
    const chekpassword=(e)=>{
        e.preventDefault();
        if (password.trim() === '' || confirmpassword.trim() === '') {
            setpasserror('email field cannot b empety')
        }
       else if(password !== confirmpassword){
            setpasserror('password does not match')
        }
        else {
            setpasserror('');
           setpasserror('form is submited')
        }

        
    }

    return(
        <div style={{margin:30}}><br/>
            <strong>Qno13</strong>
           <form onSubmit={chekpassword}>
           <input type="passord" placeholder="enter password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value) }/><br/>
            <input type="pasword" placeholder="confirm password" name="confirmpassword" id="confirmpassword" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
           <button type="submit">Submit</button>  
           <span style={{color:'red'}}>{passerror}</span>
           </form>
        </div>
    )

}