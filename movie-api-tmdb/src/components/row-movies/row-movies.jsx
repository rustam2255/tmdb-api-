
import RoxMovieItems from '../row-movie-items/row-movie-items'
import './row-movies.scss'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MovieInfo from '../movie-info/movie-info';
import React from 'react';
import MovieService from '../../servisec/movie-service';


class RowMovies extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      open: false,
      movies: [],
      error: false,
      loading: true,
      page: 2
    }
    this.movieService = new MovieService()
  }
  componentDidMount(){
    this.getTrandingMovies()
  }
  getTrandingMovies = () => {
    this.movieService.getTrandingMovies()
    .then(res => {
      this.setState( ({movies: res}))    
    })
    
  }
  getMovie= () => {
    this.setState(({page}) => ({page: page+1}))
    this.getTrandingMovies(this.state.page)
  }

  onToggleOpen = () => {
    this.setState(({open}) => ({state: !open}))
  }
  render(){
    const {open,movies} = this.state
    return (
      <div className='rowmovies'>
        <div className="rowmovies__top">
          <div className="rowmovies__top-title">
            <img src="/tranding.svg" alt="img" />
            <h1>Trending</h1>
          </div>
          <div className="hr" />
          <a href="#">See more</a>
        </div>
        <div className="rowmovies__lists">
          {movies.map((movie) => (
            <RoxMovieItems
             key={movie.id}
             movie={movie}
             onToggleOpen={this.onToggleOpen}  />
             
          ))}
        </div>
        <div className="rowmovies__loadmore">
          <button className='btn btn-secondary' onClick={this.getMovie}>
            Load More
          </button>
        </div>
      
        <Modal open={open} onOpen={this.onToggleOpen}>
          <MovieInfo />
        </Modal>
      </div>
    )
  }

}

export default RowMovies
