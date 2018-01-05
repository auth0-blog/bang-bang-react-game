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
  return (
    <Canvas>
      <Sky />
      <Ground />
      <Cannon />
      <line x1="340" y1="0" x2="340" y2="800" style={lineStyle} />
      <line x1="0" y1="660" x2="1600" y2="660" style={lineStyle} />
    </Canvas>
  );
};


export default App;
