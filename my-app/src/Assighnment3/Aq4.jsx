import { useState } from "react";
 export const Heloo = ()=>{


      const str="amber maria";
      const vowels="aeiouAEIOU"
      let count=0;
      for(let i=0; i<str.length; i++){
         if(vowels.includes(str[i])){
            count++;
         }
      }
 
 return(
   <div>
      <h1> vowels word:{count}</h1>
   </div>
 )
}