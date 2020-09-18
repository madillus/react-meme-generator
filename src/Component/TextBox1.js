import React from 'react';

export default function TextBox1({ onChange }) {
  return (
    <div>
      <label>TextBox1:</label>
      <input type="Text" className="Text" onChange={onChange} />
    </div>
  );
}
