
const INITIAL_STATE = {
    allDrinkers:[],
    drinkers: [],
    curDrinker: "",
    beers:[],
    transactions:{
        jan: [],
        feb: [],
        mar: [],
        apl: [],
        may: [],
        jun: [],
        jul: [],
        aug: [],
        sep: [],
        oct: [],
        nov: [],
        dec: [],
    },
    spending: {
        jan: [],
        feb: [],
        mar: [],
        apl: [],
        may: [],
        jun: [],
        jul: [],
        aug: [],
        sep: [],
        oct: [],
        nov: [],
        dec: [],
    }
};

const drinker = (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_DRINKERS':
            newState.drinkers = action.drinkers;
            break;
        case 'SET_CUR_DRINKERS':
            newState.curDrinker = action.curDrinker;
            break;
        case 'SET_BEERS':
            newState.beers = action.beers;
            break;
        case 'SET_TRANSACTIONS':
            newState.transactions[action.month] = action.transactions;
            break;
        case 'SET_SPENDING':
            newState.spending[action.month] = action.spending;
            break;
        case 'SET_ALL_DRINKERS':
            newState.allDrinkers = action.allDrinkers;
            break;
        default:
            return state;
    }
    return newState;
}

export default drinker;
