import React from 'react';

const AddTodo = ({addTask, typeTask, text}) => {
    return (
        <div className="add_todo_wrap">
            <input onChange={(e) => {typeTask(e.target.value)}} className="input_add_todo" value={text} type="text" placeholder="Enter your task" />
            <button onClick={() => {addTask()}} className="btn_add_todo">Create Todo</button>
        </div>
    )
}

export default AddTodo;