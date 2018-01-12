import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiscBase from './DiscBase';
import DiscTop from './DiscTop';
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
      <g id="flying-disc">
        <DiscBase position={this.props.position} />
        <DiscTop position={this.props.position} />
      </g>
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
