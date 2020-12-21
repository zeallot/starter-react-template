import { handleActions } from 'redux-actions';
import {
  fetchDogRequest,
  fetchDogPriceSuccess,
  fetchDogPriceFailure,
} from './actions';

const defaultState = {
  img: null,
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  ...payload,
  isFetching: false,
  error: null,
});

const defaultFailureReducer = (state, { payload }) => ({
  ...state,
  isFetching: false,
  error: payload,
});

const dogReducer = handleActions(
  {
    [fetchDogRequest]: defaultFetchReducer,
    [fetchDogPriceSuccess]: defaultSuccessReducer,
    [fetchDogPriceFailure]: defaultFailureReducer,
  },
  defaultState,
);

export default dogReducer;
