import React, { Component } from 'react';

import Display from './components/Display';
import FunctionKeys from './components/FunctionKeys';
import DigitKeys from './components/DigitKeys';
import OperatorKeys from './components/OperatorKeys';

class App extends Component {
  state = {
    value: null,
    displayValue: '0',
    readyToOperate: false,
    operator: null
  }

  handleClearClick = () => {
    this.setState({
      value: null,
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

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <div className="keypad">
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
      </div>
    );
  }
}

export default App;
