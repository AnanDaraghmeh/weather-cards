export default (state = null, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return "asyncStart";
    case "ASYNC_SUCCESS":
      return "asyncSuccess";
    case "ASYNC_ERROR":
      return "asyncError";
    default:
      return state;
  }
};
