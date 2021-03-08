import axios from "axios";
import {
  upcomingMoviesURL,
  nowPlayingMoviesURL,
  popularMoviesURL,
} from "../api";

export const loadMovies = () => (dispatch) => {
  try {
    const getUpcomingData = () => {
      return axios.get(upcomingMoviesURL());
    };

    const getPopularData = () => {
      return axios.get(popularMoviesURL());
    };

    const getNowPlayingData = () => {
      return axios.get(nowPlayingMoviesURL());
    };

    Promise.all([
      getUpcomingData(),
      getPopularData(),
      getNowPlayingData(),
    ]).then((results) => {
      const upcomingData = results[0];
      const popularData = results[1];
      const nowPlayingData = results[2];
      dispatch({
        type: "FETCH_MOVIES",
        payload: {
          upcoming: upcomingData.data.results,
          popular: popularData.data.results,
          nowPlaying: nowPlayingData.data.results,
        },
      });
    });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", error });
  }
};
