import React, { Component } from 'react';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Grid, Col } from 'react-flexbox-grid';

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
    })
  }

  addToArray = () => {
    this.setState({
      games: [...this.state.games, this.state.game],
      game: ''
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
      <Grid fluid>
        <Col>
          <div className="App">
            <header className="App-header123" id="RandomGame">
              <h1 className="App-title123" >Random Game Picker</h1>
            </header>

            < br />

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
                <center>
                  <Button bsStyle="primary" onClick={this.addToArray}>Add</Button>
                </center>
              </ButtonToolbar>

            </div>

            < br />

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

            < br />

            <div>{result}</div>
          </div >
        </Col>
      </Grid>
    );
  }
}

export default App;
