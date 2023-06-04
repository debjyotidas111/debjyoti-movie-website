import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './MovieList.css';


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const response = await axios.get(
        'https://www.omdbapi.com/?apikey=45f0782a&s=war'
      );
      const movies = response.data.Search;
     // var search = movies;
   //console.log(movies);


      this.setState({ movies });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  render() {
    const { movies } = this.state;

    return (
      <>              
      <div className="movie-list">
      
           {movies.map((movie, index) => (        
          <MovieCard keys={index} titles={movie.Title} images={ movie.Poster} />
        ))}
       
        <footer class="footer">
  <p>&copy; 2023 Debjyoti Das</p>
</footer>

      </div>
      </>
    );
  }
}

export default MovieList;
