
export const setData = data => ({
    type: 'SET_DATA',
    data
});

export function getData(sql) {
    return (dispatch) => {
        fetch(`http://localhost:5000/data/${sql}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setData(data));
            });
    }
}