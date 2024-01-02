import React, { useState } from 'react';

const ConcatenateLists = () => {
  const [list1, setList1] = useState([1, 2, 3]);
  const [list2, setList2] = useState([4, 5, 6]);
  const concatenatedList = [...list1, ...list2];

  return (
    <div>
      <p>List 1: {list1.join(' ')}</p>
      <p>List 2: {list2.join(' ')}</p>
      <button className='btn btn-primary' onClick={() => {setList2(concatenatedList);}}>Concatenate Lists</button>
    </div>
  );
};

export default ConcatenateLists;
