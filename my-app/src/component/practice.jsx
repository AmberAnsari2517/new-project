import { useState } from "react";
export const Rversebox=()=>{
    const  [Myname , setData] =useState({firrstname: 'amber' ,lastname: 'maria'})
    function Update(){
        setData({...Myname, lastname:"ansari" })
        
    }
    return(
        <div>
            <h1>first name:{Myname.firrstname} last name:{Myname.lastname}</h1>

            <button className="btn btn-primary" onClick={Update}> Update</button>
        </div>
    )
}