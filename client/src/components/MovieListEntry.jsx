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
    console.log(this.state.watched);
    this.setState({
      watched: !this.state.watched
    })
    // this.props.handleWatched()
    // callback(this.state.watched);
  }

  render() {
    return (
      <div className='movie'>
        {this.props.movie}
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