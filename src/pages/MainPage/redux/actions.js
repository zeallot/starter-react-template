import { createAction } from 'redux-actions';
import api from '../../../services/apiService';

export const fetchDogRequest = createAction('FETCH_DOG_REQUEST');
export const fetchDogPriceSuccess = createAction('FETCH_DOG_SUCCESS');
export const fetchDogPriceFailure = createAction('FETCH_DOG_FAILURE');

export const fetchDog = () => async (dispatch) => {
  try {
    dispatch(fetchDogRequest());

    const response = await api.example.getRandomDogImg();

    dispatch(fetchDogPriceSuccess(response.data));
  } catch (error) {
    dispatch(fetchDogPriceFailure(error));
  }
};
