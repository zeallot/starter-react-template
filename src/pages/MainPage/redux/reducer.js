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

const exampleReducer = handleActions(
  {
    [fetchDogRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchDogPriceSuccess](state, { payload }) {
      return {
        ...state,
        img: payload.message,
        isFetching: false,
        error: null,
      };
    },
    [fetchDogPriceFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);

export default exampleReducer;
