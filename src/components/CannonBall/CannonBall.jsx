import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';

class CannonBall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ellipse
        className="cannon-ball"
        cx={this.props.position.x}
        cy={this.props.position.y}
        rx="20"
        ry="20"
      />
    );
  }
}

CannonBall.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
};

export default CannonBall;
