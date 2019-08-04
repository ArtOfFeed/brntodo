import React from 'react';
import EditTodo from './EditTodo';

const Todo = (props) => {
    let {todo} = props;
    return (
        <div className="task_item">
            {
                todo.editing ? 
                    <EditTodo 
                        id={todo.id}
                        msg={props.msg}
                        onEditingTodo={props.onEditingTodo}
                        onSaveEdit={props.onSaveEdit}
                        /> : 
                    <span className={todo.completed ? 'done' : ''}
                        onClick={() => {props.onToggleTodo(todo.id)}}>
                        {todo.message}
                        </span>
            }
            <span onClick={() => {props.onEditTodo(todo.id)}} className="edit">&#9998;</span>
            <span onClick={() => {props.onDeleteTodo(todo.id)}} className="delete">&#10008;</span>
        </div>
    )
}

export default Todo;