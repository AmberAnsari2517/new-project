//1. Create a function that filters out negative numbers
 export const Aq1=()=>{
    let array=['2 ', '-3 ', '4 ','-5 ', '6 ' ]
    let newarray=[];
    for(let index = 0; index < array.length; index++){
        if (array[index] > 0){
            newarray.push(array[index ])
        }
    }
    console.log(newarray)
    return(
        <div>
            <h2>{newarray}</h2>
        </div>
    )
 }