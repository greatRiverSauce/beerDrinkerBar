export const setRegions = regionsSaleHighest => ({
    type: 'SET_REGIONS',
    regionsSaleHighest
});

export const setRegionsLikeHighest = regionsLikeHighest => ({
    type: 'SET_REGIONS_LIKE_HIGHEST',
    regionsLikeHighest
});

export const setManu = manus => ({
    type: 'SET_MANU',
    manus
});

export function getManu() {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/manufacturers/getAll`)
            .then(res => res.json())
            .then(manus => {
                dispatch(setManu(manus));
            });
    }
}


export function getSaleHighest(manufacturerName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/manufacturer/${manufacturerName}/regions/sale`)
            .then(res => res.json())
            .then(regions => {
                dispatch(setRegions(regions));
            });
    }
}

export function getLikeHighest(manufacturerName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/manufacturer/${manufacturerName}/regions/likes`)
            .then(res => res.json())
            .then(regions => {
                dispatch(setRegionsLikeHighest(regions));
            });
    }
}