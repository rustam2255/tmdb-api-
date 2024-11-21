import React from 'react'
import './hero.scss'
import MovieService from '../../servisec/movie-service'
import Spinner from '../spinner/spinner'

class Hero extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movie: {},
      loading: true
    }
    this.movieService = new MovieService()
  
  }
  componentDidMount(){
    this.getMovie()
  }
  getMovie = () =>{
    this.movieService.getRandomMovie()
      .then(res => this.setState({movie: res}))
      .finally(() => this.setState({loading: false}))
  }
  render() {
    const {movie, loading} = this.state
    
    return (
      <div className='hero'>
        <div className="hero__info">
          <h2>FIND MOVIES</h2>
          <h1>TV shows and more</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores ab quia! Nihil quam mollitia beatae voluptates architecto corrupti nisi, consectetur modi ipsum, quod, eius earum deleniti eos iure veniam!</p>
          <button className='btn btn__primary'>Details</button>
        </div>
        <div className="hero__movie">
          {loading? <Spinner /> : <Content movie={movie} />}
         
        </div>
      </div>
    )
  }

}

export default Hero
const Content = ({movie}) =>{
  return(
    <>
       <img src={movie.thumbnail} alt="img" />
          <div className="hero__movie-descr">
            <h1>{movie.name}</h1>
            <p>{movie.description && movie.description.length >= 200 ? `${movie.description.slice(0, 200)}...` : movie.description}</p>
            <div>
              <button className='btn btn__secondary'>Random movie</button>
              <button className='btn btn__primary'>Details</button>
            </div>
          </div>
    </>
  )
}