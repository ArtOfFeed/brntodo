import React from 'react';
import {Filters} from './FiltersType';
import FilterLink from './FilterLink';

const FiltersList = (props) => {
    let filters = Filters.map((filter, i) => <FilterLink 
        key={'filt' + i}
        name={filter.val}
        filter={props.filter}
        filterType={filter.type}
        onFilter={props.onFilter} />)
    return (
        <div className="filters_wrap">
            {filters}
        </div>
    )
}

export default FiltersList;