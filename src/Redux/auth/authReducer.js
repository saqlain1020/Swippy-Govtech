import { SET_USER } from "./authConstants";
let initialState = {};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {...payload.user};
    default:
      return state;
  }
};

export default authReducer;
