import FiltersList from './FiltersList';
import {connect} from 'react-redux';
import { onFilterAC } from '../../redux/reducers/AddTodoReducer';

let mapStateToProps = (state) => {
    return {
        todos: state.addTodoTask.todos,
        filter: state.addTodoTask.filter
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFilter: (filter_type) => {
            dispatch(onFilterAC(filter_type))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);