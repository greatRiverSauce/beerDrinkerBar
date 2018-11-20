
export const setTransactions = transactions => ({
    type: 'SET_TRANSACTIONS_BARTENDER',
    transactions
})

export const setRankings = rankings => ({
    type: 'SET_RANKINGS_BARTENDER',
    rankings
})

export function getTransactions (barName, bartenderName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/bar/${barName}/${bartenderName}/shifts/beer`)
            .then(res => res.json())
            .then(transactions => {
                dispatch(setTransactions(transactions));
            });
    }
}

export function getRankings (barName, shiftName, dayName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/bartender/ranking/${barName}/${shiftName}/${dayName}`)
            .then(res => res.json())
            .then(rankings => {
                console.log(rankings);
                dispatch(setRankings(rankings));
            });
    }
}