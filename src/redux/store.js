import {createStore, combineReducers} from 'redux';
import addTodoTask from './reducers/AddTodoReducer';
// import filtersTodoTask from './reducers/FilterTodoReducer.js';

const reducers = combineReducers({
    addTodoTask
})

const store = createStore(reducers);

export default store;