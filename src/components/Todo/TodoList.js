import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    let list = props.todos.map((todo) => <Todo 
            key={todo.id}
            msg={props.msg}
            onEditTodo={props.onEditTodo}
            onDeleteTodo={props.onDeleteTodo}
            onToggleTodo={props.onToggleTodo}
            onEditingTodo={props.onEditingTodo}
            onSaveEdit={props.onSaveEdit}
            todo={todo} />)
    return (
        <div className="task_list">{list}</div>
    )
}

export default TodoList;