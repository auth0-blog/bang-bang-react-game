import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';
import './CannonBall.css';

class CannonBall extends Component {
  constructor(props) {
    super(props);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.state = {
      position: props.position,
      visible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    const self = this;
    this.setState({
      position: nextProps.position,
      visible: nextProps.visible,
    });
    if (!nextProps.visible) return;
    setTimeout(() => {
      self.setState({
        position: nextProps.position,
        visible: true,
      });
    }, 5000);
  }

  render() {
    if (!this.state.visible) return null;
    return (
      <ellipse
        className="cannon-ball"
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
