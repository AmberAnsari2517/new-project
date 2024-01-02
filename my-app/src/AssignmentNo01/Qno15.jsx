import { useState } from "react";
export const Qno15 =()=>{
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setemail] = useState('');
    const [emailerror, setemailerror] = useState ('')
    const [password, setPassword] = useState('')
    const [confirmpassword , setconfirmpassword]= useState('')
    const [passerror, setpasserror] =useState ('')
   
    const [form, formsubmit] = useState ('')

    const handleSubmit = (e) => {
      e.preventDefault();
      const emailformet = /[@]/;
    if ( name.trim() === ''){
        setNameError('user name cannot be empet')
        return;
    }
   else if(email === ''){
    setemailerror('email field cannot b empety')
     return;
    }
    
   else if (!emailformet.test(email)){
    setemailerror('invalid email formet') 
    return;  
    }
    else if (password.trim() === '' || confirmpassword.trim() === '') {
        setpasserror('email field cannot b empety')
        return;
    }
  
   else if(password !== confirmpassword){
        setpasserror('password does not match')
        return;
    }
    else if(password.length<5){
        setpasserror("maximum length is five")
        return;
    }
    else{
       // setNameError('')
     console.log('form is submited with name', name)
     formsubmit('form is submited')                                              
      }
    };
  
    return (
        <div style={{margin:30}}>
            <strong>Qno:15</strong><br/>
         <form onSubmit={handleSubmit}>
            <div>
            <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="user name"
          onChange={(e) => setName(e.target.value)}
        />
        <span style={{ color: 'red' }}>{nameError}</span>
        <br/>
            </div>
            <div>
            <input
          type="text"
          id="name"
          name="name"
          value={email}
          placeholder="user name"
          onChange={(e) => setemail(e.target.value)}
        />
        <span style={{ color: 'red' }}>{emailerror}</span>
        <br/>
        </div>
        <div>
        <input type="passord" placeholder="enter password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value) }/>
        <span style={{color:'red'}}>{passerror}</span><br/>
            <input type="pasword" placeholder="confirm password" name="confirmpassword" id="confirmpassword" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>  
         
        </div>
        <input type="submit" value="Submit" />
        <span>{form}</span>
      </form>

        </div>
    );
         
}