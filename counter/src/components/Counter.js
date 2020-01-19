import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/App.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.increaseIfOdd = this.increaseIfOdd.bind(this);
    this.increaseAsync = this.increaseAsync.bind(this);
  }

  increaseIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrease();
    }
  }

  increaseAsync() {
    setTimeout(() => {
      this.props.onIncrease();
    }, 1000);
  }

  render() {
    const { value, onIncrease, onDecrease } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>Clicked: {value} times</p>
          <span>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={this.increaseIfOdd}>Increment if odd</button>
            <button onClick={this.increaseAsync}>Increment async</button>
          </span>
        </header>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};
