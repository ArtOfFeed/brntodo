import React from 'react';

const EditTodo = (props) => {
    return (
        <div className="edit_field">
            <input onChange={(e) => {props.onEditingTodo(e.target.value)}} value={props.msg} type="text"/>
            <span onClick={() => {props.onSaveEdit(props.id)}} className="save_edit">&#10003;</span>
        </div>
    )
}

export default EditTodo;