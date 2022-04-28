import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleUserInput (event) {
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick (event) {
    event.preventDefault();
    this.props.handleAdd(this.state.userInput);
  }

  render() {
    return (
      <form>
        <label>
          <input
            type="text"
            value={this.state.userInput}
            placeholder="Add movie title here"
            onChange={this.handleUserInput}
          />
        </label>
        <input
          type="submit"
          value="Add"
          onClick={this.handleClick}
        />
      </form>
    )
  }
}

export default Input;