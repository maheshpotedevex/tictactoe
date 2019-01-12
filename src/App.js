import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Status from "./components/status";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    };
  }
  handleClick(index) {
    // Update board index
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        });
      }
      this.checkWinner();
    }
  }
  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];

    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        alert("You Won!");
        this.setState({
          winner: this.state.player
        });
      }
    }
  }

  setPlayer(player) {
    this.setState({
      player
    });
  }

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={e => this.handleClick(index)}>
        <span style={{ fontSize: 40 }} className="badge badge-info m-2">
          {box}
        </span>
      </div>
    ));
  }

  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="starter-template">
            <span
              style={{ fontSize: 30 }}
              className="badge badge-secondary m-2"
            >
              Tic Tac Toe Game Awesome!
            </span>
            <p className="lead">Waiting for game description...</p>
            <Status
              player={this.state.player}
              winner={this.state.winner}
              setPlayer={e => {
                this.setPlayer(e);
              }}
              reset={this.state.winner}
            />
            <div className="board">{this.renderBoxes()}</div>
            <button disabled={!this.state.winner} onClick={() => this.reset()}>
              Reset
            </button>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
