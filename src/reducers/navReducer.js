const navReducer = (state = "upcoming", action) => {
  switch (action.type) {
    case "SELECT_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default navReducer;
