import React, { Component } from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import CannonBall from './CannonBall/CannonBall';
import Cannon from './Cannon/Cannon';
import Sky from './Sky/Sky';
import './App.css';

const App = () => (
  <Canvas>
    <Sky />
    <Ground />
    <Cannon />
    <CannonBall />
  </Canvas>
);

export default App;
