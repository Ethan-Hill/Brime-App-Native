import { SET_COLORMODE } from "../constants/index";

export function setColorMode(payload) {
  return { type: SET_COLORMODE, colorMode: payload };
}
