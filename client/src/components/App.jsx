import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      movieList: ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina'],
      sorted: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(userInput) {
      const movieListCopy = this.state.movieList.slice();
      const filteredList = movieListCopy.filter((movie) => {
        if (movie.toLowerCase().includes(userInput.toLowerCase())) {
          return movie;
        }
      })
      this.setState({
        value: userInput,
        sorted: filteredList
      });
  }

  render() {
    return (
      <div>
        <h2 className="header">MovieList</h2>
        <Search
          value={this.state.value}
          handleGo={this.handleSubmit}
        />
        {this.state.sorted.length > 0 ?
          <MovieList list={this.state.sorted}/> :
          <MovieList list={this.state.movieList}/>}
      </div>
    );
  }
}

export default App;