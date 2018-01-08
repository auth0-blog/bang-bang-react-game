import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Position from '../Utils/Position';

class CannonBall extends Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.state = {
      position: props.position,
      visible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      position: nextProps.position,
      visible: nextProps.visible,
    });
  }

  move() {
    const newPosition = this.state.position;
    const showCannonBall = newPosition.x > 0 && newPosition.x < 1600;
    newPosition.x = showCannonBall ? newPosition.x + 1 : -100;
    this.setState({
      ...this.state,
      position: newPosition,
      visible: showCannonBall,
    });
  }

  render() {
    const self = this;
    const cannonStyle = {
      fill: '#333',
    };

    // moving the ball!
    if (this.state.visible) {
      setTimeout(() => {
        self.move();
      }, 1);
    }

    return (
      <ellipse
        style={cannonStyle}
        cx={this.state.position.x}
        cy={this.state.position.y}
        rx="20"
        ry="20"
      />
    );
  }
}

CannonBall.propTypes = {
  visible: PropTypes.bool.isRequired,
  position: PropTypes.instanceOf(Position).isRequired,
};

export default CannonBall;
