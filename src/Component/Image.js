import React from 'react';

export default function Image({ imageSrc, value }) {
  return (
    <div>
      <img src={imageSrc} alt={value} />
    </div>
  );
}
