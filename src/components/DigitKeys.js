import React from 'react';

import Key from './Key';

const DigitKeys = props => {
  const { numberClick, dotClick } = props;

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <div className="digit-keys">
      {numbers.map((number) => {
        return (
          <Key key={number} value={number} click={() => numberClick(number)} />
        )
      })}
      <Key value="0" special="wide" click={() => numberClick(0)} />
      <Key value="." click={dotClick} />
    </div>
  )
}

export default DigitKeys;
