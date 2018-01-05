import React from 'react';
import PropTypes from 'prop-types';
import CannonBase from './CannonBase/CannonBase';
import CannonPipe from './CannonPipe/CannonPipe';

const Cannon = props => (
  <g id="cannon">
    <CannonPipe xAxis={props.xAxis} yAxis={props.yAxis} />
    <CannonBase xAxis={props.xAxis} yAxis={props.yAxis} />
  </g>
);

Cannon.propTypes = {
  xAxis: PropTypes.number.isRequired,
  yAxis: PropTypes.number.isRequired,
};

export default Cannon;
