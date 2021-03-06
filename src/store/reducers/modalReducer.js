import { ASYNC_SUCCESS, OPEN_MODAL, CLOSE_MODAL } from '../actions/constants';

export default (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return null;
    case ASYNC_SUCCESS:
      return null;
    default:
      return state;
  }
};
