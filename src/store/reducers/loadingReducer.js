import { SET_LOAD_INFO } from "..";

const initialState = {
  load: {
    isShow: false,
  },
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOAD_INFO:
      return {
        ...state,
        load: action.payload,
      };
    default:
      return state;
  }
};

export default LoadingReducer;
