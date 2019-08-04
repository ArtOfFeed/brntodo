import {createStore, combineReducers} from 'redux';
import addTodoTask from './reducers/AddTodoReducer';
import filetersTodoTask from './reducers/FilterTodoTask.js';

const reducers = combineReducers({
    addTodoTask,
    filetersTodoTask
})

const store = createStore(reducers);

export default store;