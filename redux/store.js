// This is the main store from where all thing will happen {ApplyMiddleWare , ComposeWithDevTool & thunk is optional }
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/list';

const middleWare = [thunk];
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
