import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const MovieData = styled.div`
  padding: 20px;
  position: relative;
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const MovieYear = styled.span`
  font-size: 14px;
  color: #7f8c8d;
`;

const GenreList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Genre = styled.li`
  font-size: 14px;
  padding: 3px 8px;
  background-color: #3498db;
  color: white;
  border-radius: 15px;
`;

const Summary = styled.p`
  font-size: 14px;
  color: #34495e;
  line-height: 1.5;
`;

const Rating = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;
  background-color: #f1c40f;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
`;

function Movie({ year, title, summary, poster, genres, rating }) {
  return (
    <MovieCard>
      <MoviePoster src={poster} alt={title} />
      <MovieData>
        <Rating>★ {rating}/10</Rating>
        <MovieTitle>{title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
        <GenreList>
          {genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </GenreList>
        <Summary>{summary.slice(0, 180)}...</Summary>
      </MovieData>
    </MovieCard>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
