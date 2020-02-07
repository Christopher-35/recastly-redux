import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

//Redux.createStore(rootReducer);

const initialState = {
  currentVideo: null,
  videoList: exampleVideoData
}
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;

