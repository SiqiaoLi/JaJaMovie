import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
import Movie from "../components/Movie";

import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { popular, nowPlaying, upcoming } = useSelector(
    (state) => state.movies
  );

  return (
    <MovieList>
      <h1>home</h1>
    </MovieList>
  );
};

const MovieList = styled(motion.div)``;

export default Home;
