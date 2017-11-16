import axios from 'axios';

export const loadProjects = () => dispatch => {
    axios.get('projects.json')
        .then(res => {
            let projects = res.data,
                set = new Set();

            projects.forEach(({ category }) => set.add(category.toLowerCase()));

            let categories = ['all', ...set];

            dispatch({
                type: 'SET_CATEGORIES',
                payload: categories
            });

            dispatch({
                type: 'LOAD_PROJECTS',
                payload: res.data
            })
        })
};

export const setActiveFilter = filter => ({
    type: 'SET_ACTIVE_FILTER',
    payload: filter
});
