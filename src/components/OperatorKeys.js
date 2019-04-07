import React from 'react';

import Key from './Key';

const OperatorKeys = props => {
  const { operatorClick } = props;

  return (
    <div className="operator-keys">
      <Key value="÷" click={() => operatorClick('/')} />
      <Key value="×" click={() => operatorClick('*')} />
      <Key value="-" click={() => operatorClick('-')} />
      <Key value="+" click={() => operatorClick('+')} />
      <Key value="=" special="equals" click={() => operatorClick('=')} />
    </div>
  )
}

export default OperatorKeys;
