import React from 'react';
import { connect } from 'react-redux';

import './filters.sass';

import { setActiveFilter } from 'actions';

const Filters = ({ filters, activeFilter, setActiveFilter }) => {
    const filterList = () => filters.map(filter => <li key={filter} className={filter == activeFilter ? 'active' : ''} onClick={setFilter}>{filter}</li>);

    const setFilter = e => setActiveFilter(e.target.innerText.toLowerCase());

    return (
        <ul className="filters">
            {filterList()}
        </ul>
    )
}

export default connect( ({ categories }) => ({
    filters: categories.list,
    activeFilter: categories.activeCategory
}), {
    setActiveFilter
} )(Filters);