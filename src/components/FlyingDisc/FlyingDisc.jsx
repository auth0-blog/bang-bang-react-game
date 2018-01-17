import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import DiscBase from './DiscBase';
import DiscTop from './DiscTop';
import Position from '../../utils/Position';
import { gameHeight } from '../../utils/constants';

const rotate360 = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Rotate = styled.g`
  animation: ${rotate360} 4s linear;
`;

const FlyingDisc = props => (
  <Rotate>
    <DiscBase position={props.position} />
    <DiscTop position={props.position} />
  </Rotate>
);

FlyingDisc.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
};

export default FlyingDisc;
