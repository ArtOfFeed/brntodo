const ADD_TASK = 'ADD_TASK';
const TYPED_TASK = 'TYPED_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const EDITING_TASK = 'EDITING_TASK';
const SAVE_TASK = 'SAVE_TASK';
const FILTERING = 'FILTERING';
const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_INACTIVE = 'SHOW_INACTIVE';

let taskId = 0;

let initialState = {
    todos: [],
    text: '',
    msg: '',
    filter: SHOW_ALL
}

const AddTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let messageText = state.text;
            state.text = '';
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        message: messageText,
                        completed: false,
                        editing: false,
                        edit_value: ''
                    }
                ]
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
                todos: copyToggledArr
            }
        case DELETE_TASK:
            let copyDeletedArr = state.todos.filter((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }
            })
            return {
                ...state,
                todos: copyDeletedArr
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
                todos: copySavedArr
            }
        case FILTERING:
            let copyFilterArr;
            switch (action.filter_type) {
                case SHOW_ALL:
                    return {
                        ...state,
                    }
                case SHOW_ACTIVE: {
                    copyFilterArr = state.todos.filter((todo) => (todo.completed))
                    return {
                        ...state,
                        todos: copyFilterArr
                    }
                }
                case SHOW_INACTIVE: {
                    copyFilterArr = state.todos.filter((todo) => (!todo.completed))
                    return {
                        ...state,
                        todos: copyFilterArr
                    }
                }
                default:
                    return {
                        ...state,
                    }
            }
        default:
            return state;
    }
}

export const addTodoAC = () => ({
    type: ADD_TASK,
    id: taskId++,
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
