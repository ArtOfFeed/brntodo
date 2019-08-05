import TodoList from './TodoList';
import {connect} from 'react-redux';
import {toggleTodoAC, deleteTodoAC, editTodoAC, editingTodoAC, onSaveEditAC} from '../../redux/reducers/AddTodoReducer';

let mapStateToProps = (state) => {
    return {
        todos: state.addTodoTask.todos,
        msg: state.addTodoTask.msg,
        result: state.addTodoTask.result
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodoAC(id))
        },
        onDeleteTodo: (id) => {
            dispatch(deleteTodoAC(id))
        },
        onEditTodo: (id) => {
            dispatch(editTodoAC(id))
        },
        onEditingTodo: (msg) => {
            dispatch(editingTodoAC(msg))
        },
        onSaveEdit: (id) => {
            dispatch(onSaveEditAC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);