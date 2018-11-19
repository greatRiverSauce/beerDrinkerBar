const INITIAL_STATE = {
    data:[],
};

const sql = (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_DATA':
            newState.data = action.data;
            break;
        default:
            return state;
    }
    return newState;
}

export default sql;