import React, { Component } from 'react';

import Key from './Key';

class FunctionKeys extends Component {
  state = {
    saveUseVisible: false,
    variable: null
  }

  showSaveUse = (boolean) => {
    this.setState({
      saveUseVisible: boolean ? true : false
    })
  }

  setVariable = (variable) => {
    this.setState({
      variable: variable
    })
  }

  render() {
    const { saveVariableClick, useVariableClick } = this.props;

    return (
      <div className="variable-keys">
        <div onClick={() => this.showSaveUse(true)} className={`${this.state.saveUseVisible ? 'hidden' : ''}`}>
          <Key value="v1" click={() => this.setVariable('v1')} />
          <Key value="v2" click={() => this.setVariable('v2')} />
          <Key value="v3" click={() => this.setVariable('v3')} />
          <Key value="v4" click={() => this.setVariable('v4')} />
        </div>
        <div onClick={() => this.showSaveUse(false)} className={`${this.state.saveUseVisible ? '' : 'hidden'}`}>
          <Key value="Save" special="wide" click={() => saveVariableClick(this.state.variable)} />
          <Key value="Use" special="wide" click={() => useVariableClick(this.state.variable)} />
        </div>
      </div>
    )
  }
}

export default FunctionKeys;
