import React, { Component } from 'react';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      game: '',
      games: []
    }
  }

  updateGame = (entered) => {
    this.setState({
      game: entered.target.value
    }, () => {
      console.log('state after updating game is now ', this.state.game);
    })
  }

  addToArray = () => {
    this.setState({
      games: [...this.state.games, this.state.game]
    }, () => {
      console.log('state after submit is now ', this.state);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header123" id="RandomGame">
          <h1 className="App-title123" >Random Game Picker</h1>
        </header>
        <p className="App-intro">
          Please Enter the Game's Name
        </p>
        <form>
          <div className='form-group'>
            <input
              type="text"
              className="form-control"
              name="game"
              placeholder="name"
              onChange={this.updateGame}
              value={this.state.game}
            />
          </div>
        </form>
        <div className='button-for-submitting-games'>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.addToArray}>Submit</Button>
          </ButtonToolbar>
        </div>
        <div>
          <p className="App-intro">
            We're considering these games
        </p>
        </div>
        <div className='button-for-random'>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.newTypeToDatabase}>Magic</Button>
          </ButtonToolbar>
        </div>
      </div >
    );
  }
}

export default App;
