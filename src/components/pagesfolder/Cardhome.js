import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Array_Movies from '../../DataMovies';
import { FormControl } from 'react-bootstrap';
import './Cardhome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Cardhome = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter movies based on search input
  const filteredMovies = Array_Movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const renderStarRating = (rating) => {
    const maxRating = 10;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const remainingStars = maxRating - Math.ceil(rating);

    const starIcons = [];

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className="checked star"/>);
    }

    if (hasHalfStar) {
      starIcons.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfAlt} className="checked star" />);
    }

    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<FontAwesomeIcon key={maxRating - i} icon={faStar} />);
    }

    return starIcons;
  };


  return (
    <div className='container mt-3'>
      <div className="container mt-3 d-flex justify-content-end">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-sm-2 input__search "
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='row mt-2 justify-content-center'>
        {filteredMovies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          filteredMovies.map((movie, index) => (
            <div className='col-md-4 col-sm-6 col-xs-12 movie-card d-flex' key={index}>
              <div className='movie-card__image'>
                <div className='image-container'>
                  <img 
                    src={movie.poster}
                    alt={movie.title}
                    className='img-fluid image__poster'
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'contain',
                    }}
                  />
                  <div className='overlay'>
                    <div className='overlay-content'>
                      <h2 className='movie-card__title'>{movie.title}</h2>
                      <p className='movie-card__description'>{movie.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='button-container'>
              <div className="rating-stars">
              {renderStarRating(movie.rating)}
                </div>
                <Link to={`/details/${index}`} className='btn btn-animation mt-3'>
                  More Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cardhome;
