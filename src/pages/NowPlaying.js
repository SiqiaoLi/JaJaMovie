import { useSelector, useDispatch } from "react-redux";
import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";
import { loadMovies } from "../actions/moviesAction";
import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";

const NowPlaying = () => {
  // get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[3];

  // Fetch movies
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  // get the data
  const { nowPlaying } = useSelector((state) => state.movies);

  return (
    <MovieList>
      {pathId && <MovieDetail />}
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
      <ScrollTop />
    </MovieList>
  );
};

const MovieList = styled(motion.div)`
  padding: 2rem 5rem;
  h2 {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;

export default NowPlaying;
