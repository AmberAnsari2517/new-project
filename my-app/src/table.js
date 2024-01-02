const Table = ({value}) => {
    let result=[];
   // const input = prompt("enter your value?");
    for (let i = 1; i <= 10; i++) {
        
            result.push(<p>{`${5}* ${i} = ${5*i}`}</p>)
        }


      //  result.push(<p>{"5" + "*" + i + "=" + `${5*i}` }</p>)
    


    return (
        <>{result}</>
        
    );
}

export default Table;


