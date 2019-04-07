import React from 'react';

import Key from './Key';

const FunctionKeys = props => {
  const { clearClick, signSwitchClick, percentClick } = props;

  return (
    <div className="function-keys">
      <Key value="AC" type="function" click={clearClick} />
      <Key value="±" type="function" click={signSwitchClick} />
      <Key value="%" type="function" click={percentClick} />
    </div>
  )
}

export default FunctionKeys;
