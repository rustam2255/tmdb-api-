import './row-movie-items.scss'

const RoxMovieItems = ({movie, onToggleOpen}) => {
  return (
    <div className='movieitem' onClick={onToggleOpen}  >
      <img src={movie.thumbnail} alt={movie.title} />
      <h2>{movie.name.length > 18 ? `${movie.name.slice(0,18)}...` : movie.name} </h2>
      <div className="movieitem-descr">
        <p>{movie.release_date}</p>
        <div className="dot"></div>
        <p>{movie.vote_average} </p>
      </div>
    </div>
  )
}

export default RoxMovieItems