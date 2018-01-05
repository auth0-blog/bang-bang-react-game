import React from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import Cannon from './Cannon/Cannon';
import Sky from './Sky/Sky';
import './App.css';

const App = () => {
  const lineStyle = {
    stroke: 'rgb(255, 0, 0)',
    strokeWidth: '2',
  };
  const axis = {
    x: 300,
    y: 650,
  };
  return (
    <Canvas>
      <Sky />
      <Ground />
      <Cannon xAxis={300} yAxis={650} />
      <line x1={axis.x} y1="0" x2={axis.x} y2="800" style={lineStyle} />
      <line x1="0" y1={axis.y} x2="1600" y2={axis.y} style={lineStyle} />
    </Canvas>
  );
};


export default App;
