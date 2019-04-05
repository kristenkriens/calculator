import React from 'react';

const Key = props => {
  const { value, special, click } = props;

  return (
    <button className={`key${special ? ` key-${special}` : ''}`} onClick={click}>
      {value}
    </button>
  )
}

export default Key;
