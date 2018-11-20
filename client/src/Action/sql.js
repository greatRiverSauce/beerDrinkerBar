
export const setData = data => ({
    type: 'SET_DATA',
    data
});

export function getData(sql) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/data/${sql}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setData(data));
            });
    }
}