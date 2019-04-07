import React from 'react';

import Key from './Key';

const FunctionKeys = props => {
  const { clearClick, signSwitchClick, percentClick } = props;

  return (
    <div className="function-keys">
      <Key value="AC" click={clearClick} />
      <Key value="±" click={signSwitchClick} />
      <Key value="%" click={percentClick} />
    </div>
  )
}

export default FunctionKeys;
