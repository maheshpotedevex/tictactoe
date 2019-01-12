import React, { Component } from "react";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }

  render() {
    return (
      <form onSubmit={e => this.handleForm(e)}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="player"
            id="inlineRadio1"
            value="X"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Player X
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="player"
            id="inlineRadio2"
            value="O"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Player 0
          </label>
        </div>
        <input type="submit" className="btn btn-secondary" value="Start" />
      </form>
    );
  }
}

export default Player;
