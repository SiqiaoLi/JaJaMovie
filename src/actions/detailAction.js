import axios from "axios";
import { movieDetailsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(movieDetailsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: detailData.data,
    },
  });
};
