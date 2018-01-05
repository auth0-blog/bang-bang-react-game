import React from 'react';
import CannonBase from './CannonBase/CannonBase';
import CannonPipe from './CannonPipe/CannonPipe';

const Cannon = () => {
  return (
    <g id="cannon">
      <CannonPipe />
      <CannonBase />
    </g>
  );
};

export default Cannon;
