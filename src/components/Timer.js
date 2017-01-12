import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions/counterActions';

export const Timer = (props) => {
    return (
      <div>
      <p>Timer : </p><strong>{props.counter}</strong>
      </div>
    );
};

Timer.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.object.isRequired
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
