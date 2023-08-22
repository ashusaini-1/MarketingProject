import {
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/projectDetailConstant";

export const projectDetailsReducers = (state = { detail: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        loading: false,
        detail: action.payload,
      };

    case PROJECT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        detail: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
