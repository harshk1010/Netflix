import axios from 'axios';
import { CREATE_WEBSERIES_SUCCESS, DELETE_WEBSERIES_SUCCESS, FETCH_ALL_WEBSERIES_FAILURE, FETCH_ALL_WEBSERIES_REQUEST, FETCH_ALL_WEBSERIES_SUCCESS, FETCH_WEBSERIES_BY_GENRE_SUCCESS, FETCH_WEBSERIES_BY_ID_SUCCESS } from './ActionTypes';

const API_URL = 'http://localhost:8080/api/WebSeries';

export const createWebSeries = (webSeriesData) => async (dispatch) => {
    try {
      const response = await axios.post(API_URL, webSeriesData);
      dispatch({ type: CREATE_WEBSERIES_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };

export const fetchAllWebSeries = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_WEBSERIES_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_ALL_WEBSERIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_WEBSERIES_FAILURE, payload: error.message });
  }
};

export const fetchWebSeriesById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: FETCH_WEBSERIES_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const fetchWebSeriesByGenre = (genre) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/genre/${genre}`);
    dispatch({ type: FETCH_WEBSERIES_BY_GENRE_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteWebSeries = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_WEBSERIES_SUCCESS, payload: id });
  } catch (error) {
    console.error(error);
  }
};