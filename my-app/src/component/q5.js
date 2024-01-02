import React, { useState } from 'react';

const MergeSortedLists = () => {
  const [list1] = useState([1, 4, 6]);
  const [list2] = useState([2, 3, 5]);
  const [mergedList, setMergedList] = useState([]);
  const result = [...new Set([...list1, ...list2])].sort((a, b) => a - b);
  return (
    <div>
      <h1>List 1: {list1.join(', ')}</h1>
      <h1>List 2: {list2.join(', ')}</h1>
      <h1>Merged List: {mergedList.join(', ')}</h1>
      <button className='btn btn-primary' onClick={() => { setMergedList(result);}}>Merge Lists</button>
    </div>
  );
};

export default MergeSortedLists;
