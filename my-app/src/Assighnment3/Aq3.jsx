import React from 'react'

export const Aq3 =()=>{
  let num = 27;
  let result = '';
  if (num % 10 === 0)
      result = "True";
  else {
      result= "False";
  }
      return (
          <div>
              
             <h2 > Number is {num} = {result}</h2>
          </div>
      )
}