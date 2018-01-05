import React from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import Cannon from './Cannon/Cannon';
import Sky from './Sky/Sky';
import './App.css';

const App = () => {
  const firstCannonAxis = {
    x: 200,
    y: 700,
  };

  const secondCannonAxis = {
    x: 1400,
    y: 700,
  };

  return (
    <Canvas>
      <Sky />
      <Ground />
      <Cannon xAxis={firstCannonAxis.x} yAxis={firstCannonAxis.y} />
      <Cannon xAxis={secondCannonAxis.x} yAxis={secondCannonAxis.y} />
    </Canvas>
  );
};


export default App;
