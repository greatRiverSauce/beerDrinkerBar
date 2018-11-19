
const INITIAL_STATE = {
    transactions: [],
    rankings: [],
};

const bartender = (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'SET_TRANSACTIONS_BARTENDER':
            newState.transactions = action.transactions;
            break;
        case 'SET_RANKINGS_BARTENDER':
            newState.rankings = action.rankings;
            break;
        default:
            return state;
    }
    return newState;
}

export default bartender;