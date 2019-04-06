import React from 'react';

const Display = props => {
  const { value } = props;

  return (
    <input className="display" value={value} />
  )
}

export default Display;
