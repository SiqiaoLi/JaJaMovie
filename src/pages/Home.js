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
    </MovieList>
  );
};

const MovieList = styled(motion.div)``;
const Movies = styled(motion.div)``;

export default Home;
