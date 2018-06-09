import React, { Component } from 'react';
import './App.css';
import { Button, ButtonToolbar, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Game Picker</h1>
        </header>
        <p className="App-intro">
          Please Enter the Name of the Game Your Brought
        </p>
        <form>
          <div className='form-group'>
            <input type="text" className="form-control"
              name="game" />
          </div>
        </form>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.newTypeToDatabase}>Submit</Button>
        </ButtonToolbar>
      </div >
    );
  }
}

export default App;
