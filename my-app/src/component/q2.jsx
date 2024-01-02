import React, { useState } from 'react';
export const BoxList = () => {
  const [Boxes, setReversedBoxes] = useState([
    { id: 1, color: 'red' },
    { id: 2, color: 'green' },
    { id: 3, color: 'blue' },
    { id: 4, color: 'orange' },
  ]);

  const reverseList = () => {
    const newarray =[]
    for (let index=Boxes.length-1; index>=0; index--){
    newarray.push(Boxes[index])
    }
    setReversedBoxes(newarray);
  };

  return (
    <div>
       <div>
      {Boxes.map((box,index) => (
        <div value ={index} style={{ backgroundColor: box.color, width: '100px', height: '100px', margin: '10px' }}>
          {box.id} 
          Box 
        </div>
      ))}
    </div>
      

      <button className='btn btn-primary' onClick={reverseList}>Reverse List</button>
    </div>
  );
}