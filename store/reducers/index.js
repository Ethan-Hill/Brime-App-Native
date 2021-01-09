import { SET_COLORMODE } from "../constants/index";

const initialState = {
  colorMode: "dark",
};

function rootReducer(state = initialState, payload) {
  return {
    ...state,
    colorMode: payload.colorMode,
  };
}

export default rootReducer;
