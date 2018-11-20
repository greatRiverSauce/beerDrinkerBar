
export const setDrinkers = (drinkers) => ({
    type: 'SET_DRINKERS',
    drinkers
});

export const setBars = (bars) => ({
    type: 'SET_BARS',
    bars
});

export const setTimes = (times) => ({
    type: 'SET_TIMES',
    times
});

export const setAllBeers = allBeers => ({
    type: 'SET_ALL_BEERS',
    allBeers
});

export function getDrinkers(beerName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/beer/${beerName}/drinkers`)
            .then(res => res.json())
            .then(drinkers => {
                dispatch(setDrinkers(drinkers));
            });
    }
}

export function getBars(beerName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/beer/${beerName}/bars`)
            .then(res => res.json())
            .then(bars => {
                dispatch(setBars(bars));
            });
    }
}

export function getTimes(beerName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/beer/${beerName}/times`)
            .then(res => res.json())
            .then(times => {
                dispatch(setTimes(times));
            });
    }
}

export function getAllBeers() {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/beers/getAll`)
            .then(res => res.json())
            .then(allBeers => {
                console.log(allBeers);
                dispatch(setAllBeers(allBeers));
            });
    }
}
