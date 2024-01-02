
export const Aq2=()=>{
    let array='amber maria'
    let a = "";
for  (let x=0; x < array.length; x++) {
    if (array[x] !== " ") {
      a+=array[x];
    }
    
}
console.log(a)
return(
    <div>
        <h1>{a}</h1>
    </div>
)

}