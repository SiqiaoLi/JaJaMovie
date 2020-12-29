import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
import Movie from "../components/Movie";

import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // Fetch movies
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  // get the data
  const { popular, nowPlaying, upcoming } = useSelector(
    (state) => state.movies
  );

  return (
    <MovieList>
      <h2>Upcoming Movies</h2>
      <Movies>
        {upcoming.map((movie) => (
          <Movie
            title={movie.title}
            released={movie.release_date}
            posterPath={movie.poster_path}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </Movies>
      <h2>Now Playing Movies</h2>
      <Movies>
        {nowPlaying.map((movie) => (
          <Movie
            title={movie.title}
            released={movie.release_date}
            posterPath={movie.poster_path}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </Movies>
      <h2>Popular Movies</h2>
      <Movies>
        {popular.map((movie) => (
          <Movie
            title={movie.title}
            released={movie.release_date}
            posterPath={movie.poster_path}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </Movies>
    </MovieList>
  );
};

const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;

export default Home;
