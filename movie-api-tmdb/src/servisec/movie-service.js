class MovieService {
  _apiBase = 'https://api.themoviedb.org/3'
  _apiLng = 'language=en-US'
  _apiKey = 'api_key=a04156614679eddaf01d13f7558cd8f3'
  _apiImage = 'https://image.tmdb.org/t/p/original'
  _apiPage = 1
  getResource = async (url) => {
    const response = await fetch(url)
    if(!response.ok){
      throw new  Error(`Couldn't find ${url}, status: ${response.status}`)
    }
    return await response.json()
  }
  getAllPopular = async () => {
    return this.getResource(`${this._apiBase}/movie/popular?${this._apiLng}&page=1&${this._apiKey}`)
  }
  getTrandingMovies = async (page = this._apiPage) => {
    const response = await this.getResource(`${this._apiBase}/movie/top_rated?${this._apiLng}&page=${page}&${this._apiKey}`)
    const movies = response.results
    return movies && movies.map(movie => this._transformMovie(movie))
  }
  getDetailedMovies = async (id) => {
    return this.getResource(`${this._apiBase}/movie/${id}?${this._apiLng}&${this._apiKey}`)
  }
  getRandomMovie = async() => {
    const res = await this.getAllPopular()
    const movie = res.results[Math.floor(Math.random() * res.results.length)]
    return this._transformMovie(movie)
  }
  _transformMovie = (movie) => {
    return{
      name: movie.original_title,
      description: movie.overview,
      id: movie.id,
      thumbnail: `${this._apiImage}${movie.poster_path}`,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    }
  }
}
export default MovieService