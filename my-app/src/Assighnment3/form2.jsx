import {useState} from "react";
export const Form2  =()=>{
  const[Data, setData]=useState({
    name:"first name",
    name:"last name",
   
  })
  const heandle=(e)=>{
    const{name, value}=e.target.value
    setData({...Data [name],value})
  }
 
 
  const handleButton =(e)=>{
    
      e.preventDefault();
      {
        alert('form is submit')
    }
     
      
  }

  return(
      <div>
          <form onSubmit={handleButton}>
          <input type='text' value={Data.firstName} placeholder='First name' required
          onChange={heandle}/>
           <input type='text' value={Data.lastName} placeholder='Last name' required
          onChange={heandle}></input>
           <button type="submit" >Submit</button>
        
          </form>
      </div>
  
  )
}
