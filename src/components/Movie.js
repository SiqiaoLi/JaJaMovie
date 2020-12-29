import React from "react";
import { poster_url } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

const Movie = ({ title, released, id, posterPath }) => {
  const poster = `${poster_url()}${posterPath}`;

  return (
    <StyledMovie>
      <img src={poster} alt="poster" />
      <h3>{title}</h3>
      <p>{released}</p>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export default Movie;
