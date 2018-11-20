
export const setSpenders = spenders => ({
    type: 'SET_SPENDERS',
    spenders
});


export const setBrands = (day, brands) => ({
    type: 'SET_BRANDS',
    day,
    brands
});

export const setBars = (day, bars) => ({
    type: 'SET_BARS',
    day,
    bars
});

export function getSpenders(barName) {
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/bar/${barName}/drinkers`)
            .then(res => res.json())
            .then(spenders => {
                dispatch(setSpenders(spenders));
            });
    }
}
function getDayName(day) {
    let dayName = "";
    switch (day) {
        case "Monday":
            dayName = "mon";
            break;
        case "Tuesday":
            dayName = "tue";
            break;
        case "Wednesday":
            dayName = "wed";
            break;
        case "Thursday":
            dayName = "thu";
            break;
        case "Friday":
            dayName = "fri";
            break;
        case "Saturday":
            dayName = "sat";
            break;
        case "Sunday":
            dayName = "sun";
            break;
        default:
    }
    return dayName;
}
export function getBrands(day, barName) {
    const dayName = getDayName(day);
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/bar/${barName}/beer/${day}`)
            .then(res => res.json())
            .then(brands => {
                dispatch(setBrands(dayName, brands));
            });
    }
}

export function getBars(day, beerName) {
    const dayName = getDayName(day);
    return (dispatch) => {
        fetch(`https://salty-sierra-97268.herokuapp.com/bar/${beerName}/${day}`)
            .then(res => res.json())
            .then(bars => {
                dispatch(setBars(dayName, bars));
            });
    }
}