import { useState } from "react"
export const Aq11 = () => {

   const [data, setData] = useState("")
   const [array, setArray] = useState([]);
   const [show, setShow] = useState(false)

   const addInput = (data) => {
      setShow(false)
      array.push(data)
      setData("")
   };
   const display = () => {
      setShow(true)
   }
   return (
      <div style={{ margin: 20 }}>
         <input type="text" value={data} onChange={(e) => setData(e.target.value)}></input>
         <button type="btn" onClick={() => addInput(data)}>Add</button>
         <button type="btn" className="btn-primary" onClick={() => display()}> display</button>
         {show == true && <div>{array.map((val,index)=>{
            return(
               <p>{`Element ${index} = ${val}`}</p>
            )
         })}</div>}
      </div>



   )

}