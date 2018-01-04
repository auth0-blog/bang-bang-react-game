import React from 'react';

const Ground = () => {
  const groundStyle = {
    fill: '#27822c',
  };
  return (
    <path d="M0 800 L1600 800 L1600 700 L0 700 Z" style={groundStyle} />
  );
};

export default Ground;
