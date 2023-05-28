import { SET_LOAD_INFO } from "..";

export const setLoadingMessage = (load) => (dispatch) => {
  dispatch({
    type: SET_LOAD_INFO,
    payload: load,
  });
};
