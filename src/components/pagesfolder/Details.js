import React from 'react';
import { useParams } from 'react-router-dom';
import Array_Movies from '../../DataMovies';
import './Deatils.css';
import { Container, Row, Col } from 'react-bootstrap';


const Details = () => {
  const { index } = useParams();
  const movie = Array_Movies[index];

  return (
    <Container className='mb-4'>
      <Row className="details-container">
        <Col md={6}>
          <div className="trailer-container">
            <iframe
              src={movie.trailer}
              title={`${movie.title} Trailer`}
              className="trailer-video"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col md={6} className="animated-column">
          <div className="details-info">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-description">Description: {movie.genres.join(' , ')}</p>
            <p className="movie-release">Release Date: {movie.year}</p>
            <p className="movie-duration">Duration: {movie.duration} min</p>
            <p className="movie-director">Director: {movie.director}</p>
            <p className="movie-rating">Rating: {movie.rating}/10</p>
            {/* Add more details as needed */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
