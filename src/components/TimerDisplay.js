import React, {PropTypes} from 'react';

const TimeDisplay = (props) => {
  return(
    <div>
      <p> Time Display : </p><strong>{props.counter}</strong>
    </div>
  );
};

TimeDisplay.propTypes = {
 counter: PropTypes.number.isRequired
};

export default TimeDisplay;
