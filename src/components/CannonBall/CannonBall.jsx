import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';

class CannonBall extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    const {
      position, moveBall, id, angle,
    } = this.props;

    moveBall(position, id, angle);
  }

  componentDidUpdate() {
    const {
      position, moveBall, id, angle,
    } = this.props;

    moveBall(position, id, angle);
  }

  render() {
    const ballStyle = {
      fill: '#777',
      stroke: '#444',
      strokeWidth: '2px',
    };
    return (
      <ellipse
        style={ballStyle}
        cx={this.props.position.x}
        cy={this.props.position.y}
        rx="16"
        ry="16"
      />
    );
  }
}

CannonBall.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
  angle: PropTypes.number.isRequired,
  moveBall: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CannonBall;
