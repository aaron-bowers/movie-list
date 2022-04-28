import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import Input from './Input.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      searchValue: '',
      movieList: [],
      sorted: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAdd(addedMovie) {
    const enlargedList = this.state.movieList.slice();
    if (addedMovie) {
      enlargedList.push(addedMovie);
      this.setState({
        searchValue:addedMovie,
        movieList: enlargedList
      })
    } else {

    }
  }

  handleSubmit(userSearch) {
      const movieListCopy = this.state.movieList.slice();
      const filteredList = movieListCopy.filter((movie) => {
        if (movie.toLowerCase().includes(userSearch.toLowerCase())) {
          return movie;
        }
      })
      this.setState({
        searchValue: userSearch,
        sorted: filteredList
      });
  }

  render() {
    return (
      <div>
        <h2 className="header">MovieList</h2>
        <Input
          inputValue={this.state.inputValue}
          handleAdd={this.handleAdd}
        />
        <Search
          searchValue={this.state.searchValue}
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