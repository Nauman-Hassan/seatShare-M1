import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../store/RootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
