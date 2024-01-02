export const Qno8 =()=>{
    let array=[-3, 8, 7, 6, 5,-4, 3, 2, 1 ]
    let newnum;
    for(let i= 0; i < array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]>array[j]){
                newnum=array[i]
                array[i]=array[j]
                array[j]=newnum

            }
        }
     
}
return(
    <di>
       
        <p>{array.join(' ,')}</p>
        
    </di>
)
}