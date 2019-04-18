export default (state = [], action) => {
  switch (action.type) {
    case "WEATHER_DATA":
      const filteredState = state.filter(
        item => item.name !== action.payload.name
      );
      return [...filteredState, action.payload];
    case "REMOVE_CARD":
      return state.filter(item => item.name !== action.payload);
    default:
      return state;
  }
};
