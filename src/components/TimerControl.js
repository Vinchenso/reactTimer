import React, {Component, PropTypes} from 'react';

class TimerControl extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);

}

  onClickIncrement(){
    this.props.actions.incrementTimer();
  }

  onClickDecrement(){
    this.props.actions.decrementTimer();
  }
  render() {
    return (
      <div>
       <button onClick={this.onClickIncrement}>+</button>
       <button onClick={this.onClickDecrement}>-</button>
      </div>
   );
  }
}
TimerControl.propTypes = {
  actions : PropTypes.object.isRequired
};

export default TimerControl;
