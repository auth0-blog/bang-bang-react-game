import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';

class FlyingDisc extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    const {
      position, moveDisc, id, angle,
    } = this.props;

    moveDisc(position, id, angle);
  }

  componentDidUpdate() {
    const {
      position, moveDisc, id, angle,
    } = this.props;

    moveDisc(position, id, angle);
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

FlyingDisc.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
  angle: PropTypes.number.isRequired,
  moveDisc: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default FlyingDisc;
