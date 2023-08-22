import {
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  // CLEAR_ERRORS,
} from "../constants/projectDetailConstant";

import axios from "axios";

export const projectDetail = (projectDetails) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/project/detail",
      projectDetails,
      config
    );

    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
