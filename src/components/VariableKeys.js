import React, { Component } from 'react';

import Key from './Key';

const FunctionKeys = (props) => {
  const { variable, saveUseVisible, setVariableClick, saveVariableClick, useVariableClick } = props;

  return (
    <div className="variable-keys">
      <div className={`${saveUseVisible ? 'hidden' : ''}`}>
        <Key value="var1" click={() => setVariableClick('var1')} />
        <Key value="var2" click={() => setVariableClick('var2')} />
        <Key value="var3" click={() => setVariableClick('var3')} />
        <Key value="var4" click={() => setVariableClick('var4')} />
      </div>
      <div className={`${saveUseVisible ? '' : 'hidden'}`}>
        <Key value="Save" special="wide" click={() => saveVariableClick(variable)} />
        <Key value="Use" special="wide" click={() => useVariableClick(variable)} />
      </div>
    </div>
  )
}

export default FunctionKeys;
