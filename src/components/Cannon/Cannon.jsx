import React from 'react';
import PropTypes from 'prop-types';
import CannonBase from './CannonBase/CannonBase';
import CannonPipe from './CannonPipe/CannonPipe';

const Cannon = props => (
  <g id="cannon">
    <CannonPipe xAxis={0} yAxis={0} rotation={props.rotation} />
    <CannonBase xAxis={0} yAxis={0} />
  </g>
);

Cannon.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default Cannon;
