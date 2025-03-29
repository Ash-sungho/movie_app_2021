import React from "react";
import axios from "axios";
import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.section`
  min-height: 100vh;
  background: linear-gradient(to right, #141e30, #243b55);
  padding: 50px 20px;
  overflow-x: hidden;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const LoaderText = styled.span`
  color: #ffffff;
  font-size: 20px;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  padding: 50px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <Container>
        {isLoading ? (
          <LoaderWrapper>
            <LoaderText>영화 정보를 불러오는 중...</LoaderText>
          </LoaderWrapper>
        ) : (
          <MoviesGrid>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </MoviesGrid>
        )}
      </Container>
    );
  }
}

export default App;
