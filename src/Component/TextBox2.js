import React from 'react';

export default function TextBox2({ onChange }) {
  return (
    <div>
      <label>TextBox2:</label>
      <input type="Text" className="Text" onChange={onChange} />
    </div>
  );
}
