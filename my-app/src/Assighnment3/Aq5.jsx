
export const Maxnum=()=>{
    let array=[7,2,5,]
    let num;
    for(let i=0; i<array.length; i++){
        for (let j=i+1; j>array.length; j++){
            if(array[i]>array[j]){
                num= array[i]
                array[i]=array[j]
                array[j]=num;
            }

        }

      
    }
    return(
        <div>{array}</div>
    )

}