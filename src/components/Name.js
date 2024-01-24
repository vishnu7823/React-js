import React, { Component } from 'react';


export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true,
    };
  }

  toggleName = () => {
    this.setState({ showName: !this.state.showName });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.showName ? 'Your Name' : ''}</h1>
          <button onClick={this.toggleName}>
            {this.state.showName ? 'Hide Name' : 'Show Name'}
          </button>
        </header>
      </div>
    );
  }
}

