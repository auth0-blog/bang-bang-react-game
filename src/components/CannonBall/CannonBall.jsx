import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';

class CannonBall extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { position, moveBall, id } = this.props;
    moveBall(position, id);
  }

  componentDidUpdate() {
    const { position, moveBall, id } = this.props;
    moveBall(position, id);
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
  moveBall: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CannonBall;
