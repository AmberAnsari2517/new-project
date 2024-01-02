//1. Write a function that reverses a list.
export const Pdive=()=> {
let arr =['1','2','3' , '4']
let reversedarray = [];
reversedarray = arr.map((element, index) => {
  return  arr[arr.length - 1 - index];
    
});
console.log(reversedarray)
return(
  <div>
    <h1>{reversedarray}</h1>
  </div>
)
}