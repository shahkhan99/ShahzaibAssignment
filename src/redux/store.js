import {createStore, combineReducers} from 'redux';
import {loginReducer, postReducer} from './reducer/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  posts: postReducer,
});
export const configureStore = createStore(rootReducer);
