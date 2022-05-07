import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import Input from './Input.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      movieList: ['batman and robin', 'dude, wheres my car', 'doctor strange'],
      sorted: [],
      watched: [],
      searching: false
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearching = this.handleSearching.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
  }

  handleAdd (addedMovie) {
    const enlargedList = this.state.movieList.slice();
    if (addedMovie) {
      enlargedList.push(addedMovie);
      this.setState({
        movieList: enlargedList
      })
    }
  }

  handleSearch(userSearch) {
    const movieListCopy = this.state.movieList.slice();
    const filteredList = movieListCopy.filter((movie) => {
      if (movie.toLowerCase().includes(userSearch.toLowerCase())) {
        return movie;
      }
    })
    this.setState({
      sorted: filteredList
    });
  }

  handleSearching(searching) {
    if (searching) {
      this.setState({
        searching: true
      })
    } else {
      this.setState({
        searching: false
      })
    }
  }

  handleWatched(watchedMovies) {

  }

  handleToWatch(moviesToWatch) {

  }

  render() {
    return (
      <div>
        <h2 className="title">MovieList</h2>
        <Input
          handleAdd={this.handleAdd}
        />
        <Search
          handleSearch={this.handleSearch}
          handleSearching={this.handleSearching}
        />
        <button
          className="watched-list"
          handleWatched={this.handleWatched}>
          Watched
        </button>
        <button
          className="to-watch"
          handleToWatch={this.handleToWatch}>
          To Watch
        </button>
        {this.state.searching ?
          <MovieList list={this.state.sorted}/> :
          <MovieList list={this.state.movieList}/>}
      </div>
    );
  }
}

export default App;