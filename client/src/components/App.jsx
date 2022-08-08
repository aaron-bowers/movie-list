import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import Input from './Input.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      movieList: [],
      sorted: [],
      watched: [],
      searching: false
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearching = this.handleSearching.bind(this);
  }
  componentDidMount() {
    axios.get(`/movies`)
      .then(response => {
        // console.log(response.data);
        this.setState({
          movieList: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleAdd (movie) {
    // console.log('movie title', movie, );
    if (movie) {
      axios.post('/movies', {
        title: movie,
      })
        .then(response => {
          console.log('movie added');
        })
        .catch(err => {
          console.log(err);
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
          className="watched-list">
          Watched
        </button>
        <button
          className="to-watch">
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