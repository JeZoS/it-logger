import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
} from "./types";

export const getTech = () => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

//

export const deleteTech = (id) => async (dispatch) => {
  setLoading();
  try {
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err,
    });
  }
};

export const setLoading = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
};
