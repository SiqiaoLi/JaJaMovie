import axios from "axios";
import { movieDetailsURL, movieBackdropsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios
    .get(movieDetailsURL(id))
    .catch((error) => console.log(error));
  const movieBackdropsData = await axios.get(movieBackdropsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: detailData.data,
      backdrops: movieBackdropsData.data,
    },
  });
};
