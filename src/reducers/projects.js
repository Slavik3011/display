export default (state = [], action) => {
    switch(action.type) {
        case 'LOAD_PROJECTS':
            state = action.payload;
            break;
    }

    return state;
}