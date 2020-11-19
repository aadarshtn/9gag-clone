import { LOAD_DATA } from './actionTypes';
import { SWITCH_THEME } from './actionTypes';

export function loadData(data) {
    return {
        type: LOAD_DATA,
        data
    }
}

export function switchTheme(val){
    return {
        type: SWITCH_THEME,
        val
    }
}