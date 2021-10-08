import { LOADER_START, LOADER_STOP } from "./loaderConstants";

const initialState = false;

const loaderReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOADER_START:
      return true;
    case LOADER_STOP:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
