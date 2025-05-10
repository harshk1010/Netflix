// authActions.js
import axios from "axios";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, LOGOUT } from "./ActionTypes";
import { api, API_URL } from "../../config/api"
// Adjust accordingly based on your Spring Boot server

// Sign Up Action
export const signUp = (userData, navigate) => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST });

  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    const { jwt } = response.data;

    localStorage.setItem("token", jwt);

    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: jwt,
    });

    console.log("success signup", response);

    navigate("/homescreen"); // ✅ Now valid
  } catch (error) {
    console.log(error);
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: error.response?.data?.message || "Signup failed",
    });
  }
};


// Sign In Action
export const signIn = (userData) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST });

  try {
    const response = await axios.post(`${API_URL}/signin`, userData);
    const { jwt } = response.data;

    // Save JWT to localStorage for persistence across sessions
    localStorage.setItem("token", jwt);

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: jwt,
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// Logout Action
export const logOut = () => {
  // Clear JWT from localStorage
  localStorage.removeItem("token");

  return {
    type: LOGOUT,
  };
};