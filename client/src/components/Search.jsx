import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSearchInput (event) {
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick () {
    event.preventDefault();
    this.props.handleSearch(this.state.userInput);
    this.props.handleSearching(true);
  }

  handleClear () {
    event.preventDefault();
    this.setState({
      userInput: ''
    })
    this.props.handleSearch('');
    this.props.handleSearching(false);
  }

  render() {
    return (
      <form>
        <label>
          <input
            type="text"
            value={this.state.userInput}
            placeholder="Search..."
            onChange={this.handleSearchInput}
            className="field"
          />
        </label>
        <input
          type="submit"
          value="Go!"
          onClick={this.handleClick}
          className="go-btn btn"
        />
        <input
          type="submit"
          value="Clear Search"
          onClick={this.handleClear}
          className="clear-btn btn"
        />
      </form>
    )
  }
}

export default Search;