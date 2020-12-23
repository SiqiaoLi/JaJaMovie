const initState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
  searched: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
        popular: action.payload.popular,
        nowPlaying: action.payload.nowPlaying,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
