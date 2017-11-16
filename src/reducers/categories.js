const initialState = {
    list: [],
    activeCategory: 'all'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CATEGORIES':
            state = { ...state, list: action.payload };
            break;

        case 'SET_ACTIVE_FILTER':
            state = { ...state, activeCategory: action.payload };
            break;
    }

    return state;
}