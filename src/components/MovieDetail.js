import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { poster_url, backdrops_url } from "../api";

const MovieDetail = () => {
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const { movie, backdrops, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <Image>
                <img
                  src={`${poster_url()}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Image>
              <Info>
                <div className="rating">
                  <h3>{`${movie.title} (${movie.release_date})`}</h3>
                  <h4>Rating</h4>
                  <p>{movie.vote_average}</p>
                </div>
                <h4>Genres</h4>
                <Genres>
                  {movie.genres.map((data) => (
                    <p key={data.id}>{data.name}</p>
                  ))}
                </Genres>
                <div className="overview">
                  <h4>Overview</h4>
                  <p>{movie.overview}</p>
                </div>
              </Info>
            </Stats>
            <h4>Backdrops</h4>
            <Backdrops>
              {backdrops.backdrops.map((data) => (
                <img src={`${backdrops_url()}${data.file_path}`} />
              ))}
            </Backdrops>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 0.5rem;
  padding: 2rem 4rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 2rem;
  border-bottom: 2px solid grey;
`;

const Info = styled(motion.div)`
  padding: 1.5rem 3rem 0rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled(motion.div)`
  margin-top: 3rem;
  img {
    border-radius: 0.4rem;
    width: 35vh;
    height: 50vh;
    object-fit: cover;
  }
`;

const Genres = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  p {
    margin-right: 1rem;
  }
`;

const Backdrops = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 100vh;
    object-fit: cover;
    padding: 0.5rem 0rem;
  }
`;

export default MovieDetail;
