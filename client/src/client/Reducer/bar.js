
const INITIAL_STATE = {
    spenders:[],
    brands:{
        mon:[],
        tue:[],
        wed:[],
        thu:[],
        fri:[],
        sat:[],
        sun:[]
    },
    bars:{
        mon:[],
        tue:[],
        wed:[],
        thu:[],
        fri:[],
        sat:[],
        sun:[]
    }
};

const bar = (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_SPENDERS':
            newState.spenders = action.spenders;
            break;
        case 'SET_BRANDS':
            newState.brands[action.day] = action.brands;
            break;
        case 'SET_BARS':
            newState.bars[action.day] = action.bars;
            break;
        default:
            return state;
    }
    return newState;
}

export default bar;