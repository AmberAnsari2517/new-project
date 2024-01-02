import { useState } from "react";
const Task=()=>{
    const [count, setCount]=useState(0)
    console.log(count)
    return(
     <>
     <button onChange={(e)=>{
        setCount(count+1)
     }}>add count</button>
     </>
    )
}
export default Task;