import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { startTimer } from './api';

class App extends Component {
  constructor(props){
    super(props);
    this.onTimerStart = this.onTimerStart.bind(this);
    this.state = {
      timestamp: 'timer is not running yet'
    };
  }
  onTimerStart(){
    startTimer(this.timerValue.value, (timestamp) => this.setState({ 
      timestamp 
    }));
  }
  render() {
    return (
      <div>
        <form>
        <TextField
          id="standard-name"
          inputRef = {input => (this.timerValue = input)}
          label="Timer Value"/>
        <Button variant="contained" onClick = {this.onTimerStart}>Start Timer</Button>
        <br/>
        <h3>
          {this.state.timestamp}
        </h3>
        </form>
      </div>
    );
  }
}

export default App;
