import { useEffect, useState } from "react";
export const Effectbox  =()=>{
    const [Show, setShow]=useState(true)
   
    return(
     <>
     {Show &&  <div style={{backgroundColor: 'red', width: '100px', height: '100px', margin: '40px'}}>
        <h1>hy</h1>
        <button style={{  marginTop: '40px'}} type="btn" onClick={()=> setShow(!Show)}>
            { Show=== true ? 'hide div': 'show div'}</button>
     </div> }
     
     </>
    )
  
  
  }
