import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Counter = React.createClass({
  incrementCount: function () {
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function () {
    return {
      count: 0
    }
  },
  render: function () {
    return (
      <div className="counter">
        <h1>
          {this.state.count}
        </h1>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
});

ReactDOM.render(
  <Counter />,
  document.getElementById('mount-point')
);
