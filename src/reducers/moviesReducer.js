const initState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
  searched: [],
  error: null,
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        popular: action.payload.popular,
        nowPlaying: action.payload.nowPlaying,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
