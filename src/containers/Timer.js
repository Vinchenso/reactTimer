import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions/counterActions';
import TimerDisplay from '../components/TimerDisplay';
import TimerControl from '../components/TimerControl';

const Timer = (props) => {
    return (
      <div>
        <TimerDisplay counter={props.counter}/>
        <TimerControl actions={props.actions}/>
      </div>
    );
};

Timer.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
   counter : state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
