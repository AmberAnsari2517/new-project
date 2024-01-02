export const Aq10 =()=>{
    let string =  'The Quick Brown Fox' ;
    let Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let Lower = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    
    for(let i=0; i<string.length; i++)
    {
      if(Upper.indexOf(string[i]) !== -1)
      {
        result.push(string[i].toLowerCase());
      }
      else if(Lower.indexOf(string[i]) !== -1)
      {
        result.push(string[i].toUpperCase());
      }
      else 
      {
        result.push(string[i]);
      }
    }
  console.log(result);
  
    return (
      <div>
        <h4>{result}</h4>
        </div>
    )
}