import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import { addTodoAC, typedTaskAC } from '../../redux/reducers/AddTodoReducer';

let mapStateToProps = (state) => {
    return {
        todos: state.addTodoTask.todos,
        text: state.addTodoTask.text
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => {
            dispatch(addTodoAC())
        },
        typeTask: (text) => {
            dispatch(typedTaskAC(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);