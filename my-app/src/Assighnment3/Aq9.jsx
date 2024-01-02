import { useState } from "react";
export const Aq9=()=>{
   const [arry, setarry]=useState([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
    // let count=0;
    let maxCount=0;
    let element;
    const click=()=>{

        for(let i=0; i<arry.length; i++){
            let count=0;
            for(let j=0; j<arry.length; j++){
            if(arry[i]==arry[j]){
                count ++;
            }
            
        }
      
        if(count>maxCount){
            maxCount=count;
           element=arry[i];
        }
        }
        setarry(element +"("+maxCount+ 'times'+ ")")
    }
    
 
    return(
        <div>
            <h2>{arry}</h2>
           <button onClick={click}>click</button>  
        </div>
    )
}
