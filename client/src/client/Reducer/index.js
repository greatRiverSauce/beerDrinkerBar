import { combineReducers } from 'redux';
import drinker from "./drinker";
import manufacturer from "./manufacturer";
import bar from "./bar";
import beer from "./beer";
import sql from "./sql";
export default combineReducers({
    drinker,
    manufacturer,
    bar,
    beer,
    sql,
})
