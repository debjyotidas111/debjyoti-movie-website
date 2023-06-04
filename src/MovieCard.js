import React from 'react';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {  

    return (
   
          <div className="movie">       
            <div className='img-container'>
            <img src={this.props.images} alt={this.props.titles} />
            </div>                 
                <h2 className="movie-title">{this.props.titles}</h2>           
          </div>     
    );
  }
}

export default MovieCard;
