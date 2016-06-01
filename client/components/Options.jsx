import React, { Component } from 'react';

class Options extends Component {

  constructor(props) {
    super(props);
    this.state = {
      available: false,
      interest: '',
    };
    this.socket = window.io.connect('http://localhost:8000');
    window.alert(this.socket.id);
  }

  handleChange(event) {
    this.setState({
      interest: event.target.value,
    });
  }

  render() {
    return (<div>
      <button> Available </button>
      <button value="beer" onChange={this.handleChange.bind(this)}>
        Beer
      </button>
      <button value="coffee" onChange={this.handleChange.bind(this)}>
        Coffee
      </button>
      <button value="dinner" onChange={this.handleChange.bind(this)}>
        Dinner
      </button>
    </div>);
  }
}

export default Options;
