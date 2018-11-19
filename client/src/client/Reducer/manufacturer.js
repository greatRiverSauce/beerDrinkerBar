
const INITIAL_STATE = {
    regionsSaleHighest: [],
    regionsLikeHighest: [],
};

const manufacturer = (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_REGIONS':
            newState.regionsSaleHighest = action.regionsSaleHighest;
            return newState;
        case 'SET_REGIONS_LIKE_HIGHEST':
            newState.regionsLikeHighest = action.regionsLikeHighest;
            return newState;
        default:
            return state;
    }
}

export default manufacturer;