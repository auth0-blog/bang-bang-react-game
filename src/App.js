import React, { Component } from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import './App.css';

class App extends Component {
  render() {
    const firstCircleStyle = {
      fill: '#f0ea31',
    };

    const secondCircleStyle = {
      fill: '#48f051',
    };

    return (
      <Canvas>
        <circle cx="100" cy="100" r="50" style={firstCircleStyle} />

        <circle cx="600" cy="600" r="50" style={secondCircleStyle} />

        <Ground />
      </Canvas>
    );
  }
}

export default App;
