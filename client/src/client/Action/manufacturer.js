export const setRegions = regionsSaleHighest => ({
    type: 'SET_REGIONS',
    regionsSaleHighest
});

export const setRegionsLikeHighest = regionsLikeHighest => ({
    type: 'SET_REGIONS_LIKE_HIGHEST',
    regionsLikeHighest
});



export function getSaleHighest(manufacturerName) {
    return (dispatch) => {
        fetch("http://localhost:5000/manufacturer/" + manufacturerName)
            .then(res => res.json())
            .then(regions => {
                dispatch(setRegions(regions));
            });
    }
}

export function getLikeHighest() {
    return (dispatch) => {
        fetch("http://localhost:5000/manufacturer")
            .then(res => res.json())
            .then(regions => {
                dispatch(setRegionsLikeHighest(regions));
            });
    }
}