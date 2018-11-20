export const setDrinkers = drinkers => ({
    type: 'SET_DRINKERS',
    drinkers
});

export const setCurDrinkers = curDrinker => ({
    type: 'SET_CUR_DRINKERS',
    curDrinker
});

export const setBeers = beers => ({
    type: 'SET_BEERS',
    beers
});

export const setTransactions = (month, transactions) => ({
    type: 'SET_TRANSACTIONS',
    month,
    transactions
});

export const setSpending = (month, spending) => ({
    type: 'SET_SPENDING',
    month,
    spending
})

export function getDrinkers(drinkerName) {
    return (dispatch) => {
        fetch("https://salty-sierra-97268.herokuapp.com/drinkers/" + drinkerName + "transactions")
            .then(res => res.json())
            .then(drinkers => {
                dispatch(setDrinkers(drinkers));
            });
    }
}
export function getBeers(drinkerName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/drinkers/${drinkerName}/beers`)
            .then(res => res.json())
            .then(beers => {
                dispatch(setBeers(beers));
            });
    }
}
function getMonthName(month) {
    let monthName = "";
    switch (month) {
        case 1:
            monthName = "jan";
            break;
        case 2:
            monthName = "feb";
            break;
        case 3:
            monthName = "mar";
            break;
        case 4:
            monthName = "apl";
            break;
        case 5:
            monthName = "may";
            break;
        case 6:
            monthName = "jun";
            break;
        case 7:
            monthName = "jul";
            break;
        case 8:
            monthName = "aug";
            break;
        case 9:
            monthName = "sep";
            break;
        case 10:
            monthName = "oct";
            break;
        case 11:
            monthName = "nov";
            break;
        case 12:
            monthName = "dec";
            break;
        default:
    }
    return monthName;
}
export function getSpending(drinkerName, month) {
    const monthName = getMonthName(month);
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/drinkers/${drinkerName}/${month}/spending`)
            .then(res => res.json())
            .then(spending => {
                dispatch(setSpending(monthName, spending));
            });
    }
}

export function getTransactions(drinkerName, month) {
    const monthName = getMonthName(month);
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/drinkers/${drinkerName}/${month}/transactions`)
            .then(res => res.json())
            .then(transactions => {
                dispatch(setTransactions(monthName, transactions));
            });
    }
}