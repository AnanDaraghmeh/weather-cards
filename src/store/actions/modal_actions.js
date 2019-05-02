import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export const openModal = (name, extraInfo) => {
  return {
    type: OPEN_MODAL,
    payload: { name, extraInfo }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
