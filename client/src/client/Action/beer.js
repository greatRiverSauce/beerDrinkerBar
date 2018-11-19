
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

export function getDrinkers(beerName) {
    return (dispatch) => {
        fetch(`http://localhost:5000/beer/${beerName}/drinkers`)
            .then(res => res.json())
            .then(drinkers => {
                dispatch(setDrinkers(drinkers));
            });
    }
}

export function getBars(beerName) {
    return (dispatch) => {
        fetch(`http://localhost:5000/beer/${beerName}/bars`)
            .then(res => res.json())
            .then(bars => {
                dispatch(setBars(bars));
            });
    }
}

export function getTimes(beerName) {
    return (dispatch) => {
        fetch(`http://localhost:5000/beer/${beerName}/times`)
            .then(res => res.json())
            .then(times => {
                dispatch(setTimes(times));
            });
    }
}
