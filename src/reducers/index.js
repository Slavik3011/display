import { combineReducers } from 'redux';

import projects from './projects';
import categories from './categories';

export default combineReducers({
    projects,
    categories
})