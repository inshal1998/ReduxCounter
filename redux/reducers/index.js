// As in the project there is 1 reducing file that we have created in future if we create more we will combine all here.using CombineReducer..

import {combineReducers} from 'redux';
import list from '../actions/list';
export default combineReducers({
  list,
});
