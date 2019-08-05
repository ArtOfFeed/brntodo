import React from 'react';

const FilterLink = (props) => {
    return (
        <span className={props.filter === props.filterType ? 'filter active' : 'filter'} onClick={() => {props.onFilter(props.filterType)}}>{props.name}</span>
    )
}

export default FilterLink;