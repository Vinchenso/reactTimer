import React, {Component} from 'react';
import Timer from '../containers/Timer';

class App extends Component{
  render() {
    return (
      <div>
       <h1>Timer Application</h1>
       <Timer/>
      </div>
    );
  }
}

export default App;
