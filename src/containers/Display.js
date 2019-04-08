import React, { Component } from 'react';

class Display extends Component {
  state = {
    scale: 1
  };

  componentDidUpdate() {
    const displayInner = this.refs.displayInner;
    const display = this.refs.display;

    const displayWidth = display.offsetWidth;
    const displayInnerWidth = displayInner.offsetWidth;
    const newScale = displayWidth / displayInnerWidth;

    if (this.state.scale === newScale) {
      return false;
    }

    if (newScale < 1) {
      this.setState({ scale: newScale });
    } else if (this.state.scale < 1) {
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { value } = this.props;

    return (
      <div className="display" ref="display">
        <div className="display-inner" ref="displayInner" style={{ transform: `scale(${this.state.scale}, ${this.state.scale})` }}>
          {value}
        </div>
      </div>
    )
  }
}

export default Display;
