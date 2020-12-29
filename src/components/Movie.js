import React from "react";
import { poster_url } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";

const Movie = ({ title, released, id, posterPath }) => {
  const poster = `${poster_url()}${posterPath}`;

  return (
    <div>
      <h3>{title}</h3>
      <p>{released}</p>
      <p>{poster}</p>
      <img src={poster} alt="poster" />
    </div>
  );
};

export default Movie;
