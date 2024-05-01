// components/DataCard.js
import React from 'react';

const DataCard = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '5px' }}>
      <h1>{data.name}</h1>
      <p>Age: {data.age}</p>
      <p>Purpose: {data.purpose}</p>
    </div>
  );
};

export default DataCard;
