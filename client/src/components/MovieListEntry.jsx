import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
  }

  handleWatchedClick (callback) {
    this.setState({
      watched: !this.state.watched
    })
  }

  render() {
    return (
      <div className='movie'>
        {this.props.movie.title}
        <p>{this.props.movie.description}</p>
        <button
          type="button"
          className="watched-btn"
          onClick={this.handleWatchedClick}
        >
          Watched
        </button>
      </div>
    )
  }
}

export default MovieListEntry;