import React, { Component } from 'react';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      game: '',
      games: [],
      showResult: false
    }
  }

  getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(this.state.games.length));
  }

  displayResult = () => {
    this.setState({ showResult: true })
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
    let result = <p></p>;
    if (this.state.showResult) {
      result =
        <div>
          <p>How about we play the game below?</p>
          <p>{this.state.games[this.getRandomInt()]}</p>
        </div>
    }
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
          <ul>
            {this.state.games.map((item, index) =>
              <li key={index}>{item}</li>
            )}
          </ul>
        </div>
        <div className='button-for-random'>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.displayResult}>Magic</Button>
          </ButtonToolbar>
        </div>
        <div>{result}</div>
      </div >
    );
  }
}

export default App;
