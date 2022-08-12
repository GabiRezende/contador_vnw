import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    numero: 0
  };

  soma = () => {
    if (this.state.numero < 10) {
      this.setState({ numero: this.state.numero + 1 });
    }
  };

  subtrai = () => {
    this.state.numero > 0
      ? this.setState({ numero: this.state.numero - 1 })
      : this.setState({ numero: this.state.numero });
  };

  render() {
    return (
      <div class="contador">
        <h1>Contador</h1>
        <p>{this.state.numero}</p>
        <button onClick={this.soma}>+</button>
        <button onClick={this.subtrai}>-</button>
      </div>
    );
  }
}
