import React, { useState } from 'react';
export const Aq12 =()=>{
    const [char, setNumbers] = useState(['a','b', 'c', 'b']);

  const removeDuplicates = () => {
    const uniqueNumbers = [...new Set(char)];
    setNumbers(uniqueNumbers);
  };

  return (
    <div>
      
     
      <button onClick={removeDuplicates}>Remove Duplicates</button>
      <p>{char}</p>

      
    </div>
  );
};
