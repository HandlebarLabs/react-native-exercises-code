import React, { Component } from 'react';

class Challenge3 extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => this.setState({ people: response.results }))
      .catch(error => alert(error));
  }

  render() {
    return null;
  }
}

export default Challenge3;
