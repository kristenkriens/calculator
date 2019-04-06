import React, { Component } from 'react';

import Display from './components/Display';
import Key from './components/Key';

class App extends Component {
  state = {
    value: null,
    displayValue: '0',
    readyToOperate: false,
    operator: null
  }

  handleClear = () => {
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

  handleSwitchPosNegClick = () => {
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
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <div className="keypad">
          <div className="keypad-left">
            <div className="keypad-functions">
              <Key value="AC" click={() => this.handleClear()} />
              <Key value="±" click={() => this.handleSwitchPosNegClick()} />
              <Key value="%" click={() => this.handlePercentClick()} />
            </div>
            <div className="keypad-numbers">
              {numbers.map((number) => {
                return (
                  <Key key={number} value={number} click={() => this.handleNumberClick(number)} />
                )
              })}
              <Key value="0" special="wide" click={() => this.handleNumberClick(0)} />
              <Key value="." click={() => this.handleDotClick()} />
            </div>
          </div>
          <div className="keypad-right">
            <div className="keypad-operators">
              <Key value="÷" click={() => this.handleOperatorClick('/')} />
              <Key value="×" click={() => this.handleOperatorClick('*')} />
              <Key value="-" click={() => this.handleOperatorClick('-')} />
              <Key value="+" click={() => this.handleOperatorClick('+')} />
              <Key value="=" special="equals" click={() => this.handleOperatorClick('=')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
