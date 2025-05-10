 

import { FETCH_ALL_WEBSERIES_REQUEST,
    FETCH_ALL_WEBSERIES_SUCCESS,
    FETCH_ALL_WEBSERIES_FAILURE,
    FETCH_WEBSERIES_BY_ID_SUCCESS,
    FETCH_WEBSERIES_BY_GENRE_SUCCESS,
    CREATE_WEBSERIES_SUCCESS,
    DELETE_WEBSERIES_SUCCESS
 } from "./ActionTypes";

  
  const initialState = {
    loading: false,
    webseries: [],
    selectedWebseries: null,
    error: ''
  };
  
  const webseriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_WEBSERIES_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_ALL_WEBSERIES_SUCCESS:
        return { ...state, loading: false, webseries: action.payload };
  
      case FETCH_ALL_WEBSERIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case FETCH_WEBSERIES_BY_ID_SUCCESS:
        return { ...state, selectedWebseries: action.payload };
  
      case FETCH_WEBSERIES_BY_GENRE_SUCCESS:
        return { ...state, webseries: action.payload };
  
      case CREATE_WEBSERIES_SUCCESS:
        return { ...state, webseries: [...state.webseries, action.payload] };
  
      case DELETE_WEBSERIES_SUCCESS:
        return {
          ...state,
          webseries: state.webseries.filter(ws => ws.id !== action.payload)
        };
  
      default:
        return state;
    }
  };
  
  export default webseriesReducer;
  