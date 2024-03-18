import React, { Component } from "react";

export default class CBComponent extends Component {
  constructor() {
    super();
    this.state = {
      color: 'blue'
    };
    this.style = {
      backgroundClip: 'text',
      backgroundImage: 'linear-gradient(to right, rgb(255, 183, 255), blue)',
      color: 'transparent',
      fontSize: '50px',
    };
    
  }

  render() {
    return (
      <div style={this.style}>
        <h1>Classed Based Component</h1>
        <h2>STATES</h2>
        <p>{this.state.color}</p>
      </div>
    );
  }
}
