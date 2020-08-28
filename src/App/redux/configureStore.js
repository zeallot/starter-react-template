import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { fetchDog } from '../../pages/MainPage/redux/actions';

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(thunk),
  );
  store.dispatch(fetchDog());
  return store;
};
