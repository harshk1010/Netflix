// authReducer.js
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, LOGOUT } from "./ActionTypes";

// Initial State
const initialState = {
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

// Auth Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        error: null,
      };
    
    case SIGN_UP_FAILURE:
    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    
    default:
      return state;
  }
};

export default authReducer;