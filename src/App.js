import React, {Component} from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import Cannon from './Cannon/Cannon';
import Sky from './Sky/Sky';
import './App.css';

class App extends Component {
  render() {
    return (
      <Canvas>
        <Sky />
        <Ground />
        <Cannon />
      </Canvas>
    );
  }
}

export default App;
