import { useState } from "react";
export const Preverse=()=> {
 const [Div, setDiv]=useState(['1','2','3'])  
 const [Reversed, setReversed] =useState([])
 const handleReverse=()=>{
    const newDiv=[]
    for(let i=Div.length-1; i>=0; i--){
        newDiv.push(newDiv[i])
    }
    setReversed(newDiv)

 }
 return(
    <div>
        <h1>Orginal number;{Div.join(',')}</h1>
        <button onClick={handleReverse}>click me</button>
        <h1>Reverse number;{Reversed.join(' ,')}</h1>
    </div>

 )


}
