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
          <FormGroup
            controlId="formBasicText"
          // validationState={this.getValidationState()}
          >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Validation is based on string length.</HelpBlock>
          </FormGroup>
          {/* <input type="text" name="name" /> */}
        </form>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.newTypeToDatabase}>Submit</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
