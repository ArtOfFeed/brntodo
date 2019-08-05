import {applyFiltersTodo} from './FilterTodoReducer';
import {
    ADD_TASK,
    TYPED_TASK,
    TOGGLE_TASK,
    DELETE_TASK,
    EDIT_TASK,
    EDITING_TASK,
    SAVE_TASK,
    FILTERING,
    SHOW_ALL
} from '../actions/actions';

let taskId = 0;

let initialState = {
    todos: [],
    text: '',
    msg: '',
    filter: SHOW_ALL,
    result: []
}

const AddTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let messageText = state.text;
            if (messageText !== '') {
                let copyAddedArr = [
                     ...state.todos,
                    {
                        id: taskId++,
                        message: messageText,
                        completed: false,
                        editing: false,
                        edit_value: ''
                    }
                ]
                state.text = '';
                
                return {
                    ...state,
                    todos: copyAddedArr,
                    result: applyFiltersTodo(copyAddedArr, state.filter)
                }
            } else {
                return {
                    ...state
                }
            }
        case TYPED_TASK:
            return {
                ...state,
                text: action.text
            }
        case TOGGLE_TASK:
            let copyToggledArr = state.todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
            return {
                ...state,
                todos: copyToggledArr,
                result: applyFiltersTodo(copyToggledArr, state.filter)
            }
        case DELETE_TASK:
            let copyDeletedArr = state.todos.filter((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }
            })
            return {
                ...state,
                todos: copyDeletedArr,
                result: applyFiltersTodo(copyDeletedArr, state.filter)
            }
        case EDIT_TASK:
            let copyMsg;
            let copyEditedArr = state.todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.editing = !todo.editing
                    copyMsg = todo.message
                }
                return todo;
            })
            return {
                ...state,
                todos: copyEditedArr,
                result: applyFiltersTodo(copyEditedArr, state.filter),
                msg: copyMsg
            }
        case EDITING_TASK:
            return {
                ...state,
                msg: action.msg
            }
        case SAVE_TASK:
            let newTaskName = state.msg;
            state.msg = '';
            let copySavedArr = state.todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.message = newTaskName
                    todo.editing = !todo.editing
                }
                return todo;
            })
            return {
                ...state,
                todos: copySavedArr,
                result: applyFiltersTodo(copySavedArr, state.filter)
            }
        case FILTERING:
            return {
                ...state,
                filter: action.filter_type,
                result: applyFiltersTodo(state.todos, action.filter_type)
            }
        default:
            return state;
    }
}

export const addTodoAC = () => ({
    type: ADD_TASK
});

export const typedTaskAC = (text) => ({
    type: TYPED_TASK,
    text
});

export const toggleTodoAC = (id) => ({
    type: TOGGLE_TASK,
    id,
});

export const deleteTodoAC = (id) => ({
    type: DELETE_TASK,
    id,
});

export const editTodoAC = (id) => ({
    type: EDIT_TASK,
    id,
});

export const editingTodoAC = (msg) => ({
    type: EDITING_TASK,
    msg,
});

export const onSaveEditAC = (id) => ({
    type: SAVE_TASK,
    id,
});

export const onFilterAC = (filter_type) => ({
    type: FILTERING,
    filter_type,
});

export default AddTodoReducer;
