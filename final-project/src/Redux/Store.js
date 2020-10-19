import { combineReducers, createStore, applyMiddleware } from 'redux';
import todoReducer from './ToDoReducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
  todoPage: todoReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
