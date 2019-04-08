import React, { Component } from 'react';

import Display from './containers/Display';
import FunctionKeys from './components/FunctionKeys';
import DigitKeys from './components/DigitKeys';
import OperatorKeys from './components/OperatorKeys';
import VariableKeys from './components/VariableKeys';

class App extends Component {
  state = {
    value: 0,
    displayValue: 0,
    readyToOperate: false,
    operator: null,
    variableValues: {
      var1: 0,
      var2: 0,
      var3: 0,
      var4: 0
    },
    variable: null,
    saveUseVisible: false
  }

  handleClearClick = () => {
    this.setState({
      value: 0,
      displayValue: '0',
      operator: null
    });
  }

  handleNumberClick = (number) => {
    number = number.toString();

    if(this.state.readyToOperate) {
      this.setState({
        displayValue: number,
        readyToOperate: false
      });
    } else {
      this.setState({
        displayValue: this.state.displayValue === '0' || this.state.displayValue === 0 ? number : this.state.displayValue + number
      });
    }
  }

  handleDotClick = () => {
    if(this.state.readyToOperate) {
      this.setState({
        displayValue: '0.',
        readyToOperate: false
      });
    } else {
      this.setState({
        displayValue: this.state.displayValue.indexOf('.') !== -1 ? this.state.displayValue : this.state.displayValue + '.',
        readyToOperate: false
      });
    }
  }

  handleSignSwitchClick = () => {
    this.setState({
      displayValue: this.state.displayValue * -1
    });
  }

  handlePercentClick = () => {
    this.setState({
      displayValue: this.state.displayValue / 100
    });
  }

  handleOperatorClick = (operator) => {
    this.setState({
      readyToOperate: true,
      operator: operator,
      value: this.state.displayValue
    });

    const prevValue = parseFloat(this.state.value);
    const currentValue = parseFloat(this.state.displayValue);

    let total = '';
    switch(this.state.operator) {
      case '/':
        total = prevValue / currentValue;
        break;
      case '*':
        total = prevValue * currentValue;
        break;
      case '+':
        total = prevValue + currentValue;
        break;
      case '-':
        total = prevValue - currentValue;
        break;
      default:
        return false;
    }

    this.setState({
      displayValue: total,
      value: total
    });
  }

  handleSetVariableClick = (variable) => {
    this.setState({
      variable: variable,
      saveUseVisible: true
    })
  }

  handleSaveVariableClick = (variable) => {
    this.setState({
      variableValues: {
        ...this.state.variableValues,
        [variable]: this.state.displayValue
      },
      saveUseVisible: false
    });
  }

  handleUseVariableClick = (variable) => {
    this.setState({
      displayValue: this.state.variableValues[variable],
      saveUseVisible: false
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <div className="keypad">
          <div className="keypad-top">
            <div className="keypad-left">
              <FunctionKeys
                clearClick={this.handleClearClick}
                signSwitchClick={this.handleSignSwitchClick}
                percentClick={this.handlePercentClick}
              />
              <DigitKeys
                numberClick={this.handleNumberClick}
                dotClick={this.handleDotClick}
              />
            </div>
            <div className="keypad-right">
              <OperatorKeys operatorClick={this.handleOperatorClick} />
            </div>
          </div>
          <div className="keypad-bottom">
            <VariableKeys
              variable={this.state.variable}
              saveUseVisible={this.state.saveUseVisible}
              setVariableClick={this.handleSetVariableClick}
              saveVariableClick={this.handleSaveVariableClick}
              useVariableClick={this.handleUseVariableClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
