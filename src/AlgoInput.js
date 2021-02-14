import './AlgoInput.css';
import React, {Component} from 'react';

class AlgoInput extends Component {
  constructor() {
    const curr = new Date();
    const date = curr.toISOString().substr(0, 10);
    super();
    this.state = {name: '', date, reflection: '', link: ''};
  }

  difficulty = () => {
    return (
      <div>
        Difficulty:
        <div>
          <input type="radio" name="difficulty" id="easy" value="easy" />
          <label>Easy</label>
        </div>
        <div>
          <input type="radio" name="difficulty" id="medium" value="medium" />
          <label>Medium</label>
        </div>
        <div>
          <input type="radio" name="difficulty" id="hard" value="hard" />
          <label>Hard</label>
        </div>
      </div>
    );
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
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
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-input"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="link"
            placeholder="link"
            className="form-input"
          />
          <textarea
            placeholder="reflection"
            name="reflection"
            className="form-input"
          />
          <input
            type="date"
            className="form-date"
            name="dateRequired"
            defaultValue={this.state.date}
          />
          {this.difficulty()}
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default AlgoInput;
