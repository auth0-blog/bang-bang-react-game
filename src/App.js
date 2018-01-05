import React, { Component } from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import Cannon from './Cannon/Cannon';
import Cnn from './Cnn/Cnn';
import Sky from './Sky/Sky';
import './App.css';

class App extends Component {
  render() {
    return (
      <Canvas>
        <Sky />
        <Ground />
        <Cnn />
      </Canvas>
    );
  }
}

export default App;
