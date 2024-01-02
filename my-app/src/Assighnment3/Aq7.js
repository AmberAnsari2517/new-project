export const Aq7 =()=>{
    let array=[0,2,5,4,6,8]
    let newarray=[array[0]];
    for(let i=1; i<array.length; i++){
        if(array[i]%2==0){
            newarray.push('-',array[i])
        }
        else{
            newarray.push(array[i])
        }
    }
    console.log(newarray)
    return(
        <div>
            <h5>{newarray}</h5>
        </div>
    )
}