import React from 'react';

const FilterLink = (props) => {
    return (
        <span onClick={() => {props.onFilter(props.filterType)}}>{props.name}</span>
    )
}

export default FilterLink;