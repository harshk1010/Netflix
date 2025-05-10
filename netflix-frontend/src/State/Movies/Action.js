import axios from 'axios';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from './ActionTypes';
import { api_key } from '../../config/api';

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });

    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
        params: {
          api_key: api_key, // Ideally from env variable
          language: 'en-US',
        },
      });

      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: error.message,
      });
    }
  };
};