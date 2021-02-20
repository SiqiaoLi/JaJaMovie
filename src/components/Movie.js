import React from "react";
import { poster_url } from "../api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Movie = ({ title, released, id, posterPath }) => {
  const poster = `${poster_url()}${posterPath}`;

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledMovie onClick={loadDetailHandler}>
      <Link to={`/movie/${id}`}>
        <img src={poster} alt="poster" />
        <h3>{title}</h3>
        <p>{released}</p>
      </Link>
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
  p {
    padding-bottom: 0.5rem;
  }
  h3 {
    padding: 1rem;
  }
`;

export default Movie;
