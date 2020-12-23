import axios from "axios";
import {
  upcomingMoviesURL,
  nowPlayingMoviesURL,
  popularMoviesURL,
} from "../api";

export const loadMovies = () => async (dispatch) => {
  const upcomingData = await axios.get(upcomingMoviesURL());
  const popularData = await axios.get(popularMoviesURL());
  const nowPlayingData = await axios.get(nowPlayingMoviesURL());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      upcoming: upcomingData.data.results,
      popular: popularData.data.results,
      nowPlaying: nowPlayingData.data.results,
    },
  });
};
