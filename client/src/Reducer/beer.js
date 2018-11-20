const INITIAL_STATE = {
    bars: [],
    drinkers:[],
    times:[],
    allBeers:[]
};

const beer = (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_BARS':
            newState.bars = action.bars;
            break;
        case 'SET_DRINKERS':
            newState.drinkers = action.drinkers;
            break;
        case 'SET_TIMES':
            newState.times = action.times;
            break;
        case 'SET_ALL_BEERS':
            newState.allBeers = action.allBeers;
            break;
        default:
            return state;
    }
    return newState;
}

export default beer;