import { useState } from 'react';

const Divbox = () => {
    const [Mydata, setData] = useState(0);
    return (
        <>
        
        <div style={{margin:20}}>
            <button className='btn btn-primary' onClick={() => {setData(Mydata + 1);}}>+</button>
            
            <input type="number"
              value={Mydata}
            onChange={(e) => {setData(Number(e.target.value))}}>
            </input>

            <button  className='btn btn-primary' onClick={() => {setData(Mydata - 1);}}> - </button>
        </div>
        </>
    );
};

export default Divbox;