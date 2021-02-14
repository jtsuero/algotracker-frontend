import './AlgoInput.css';
import React, {Component} from 'react';

class AlgoInput extends Component {
  constructor() {
    super();
    this.state = {};
  }

  difficulty = () => {
    return (
      <div>
        Difficulty:
        <div>
          <input type="radio" name="difficulty" id="easy" value="easy" />
          <label for="easy">Easy</label>
        </div>
        <div>
          <input type="radio" name="difficulty" id="medium" value="medium" />
          <label for="medium">Medium</label>
        </div>
        <div>
          <input type="radio" name="difficulty" id="hard" value="hard" />
          <label for="hard">Hard</label>
        </div>
      </div>
    );
  };

  handleSumbit = event => {
    event.preventDefault();
  };

  render() {
    //set current date for calendar
    const curr = new Date();
    const date = curr.toISOString().substr(0, 10);
    return (
      <form onSubmit={this.handleSumbit} className="form-container">
        <div className="algo-container">
          <input type="text" placeholder="name" className="form-input" />
          <input type="text" placeholder="link" className="form-input" />
          <textarea placeholder="reflection" className="form-input" />
          <input
            type="date"
            className="form-date"
            name="dateRequired"
            defaultValue={date}
          />
          {this.difficulty()}
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default AlgoInput;
