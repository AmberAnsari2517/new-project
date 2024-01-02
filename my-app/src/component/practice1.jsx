import React from 'react';

export const MyComponent = () => {
  // An array of data to represent your content
  const boxesArray = [
    { id: 1, color: 'red' },
    { id: 2, color: 'green' },
    { id: 3, color: 'blue' },
  ];

  return (
    <div>
      {boxesArray.map((box) => (
        <div key={box.id} style={{ backgroundColor: box.color, width: '100px', height: '100px', margin: '10px' }}>
          Box {box.id}
        </div>
      ))}
    </div>
  );
};


