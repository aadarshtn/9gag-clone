import { LOAD_DATA,SWITCH_THEME } from '../actions/actionTypes';

const initialDataState = {
    data:{},
    loading: true,
    nightMode: false
};

export default function data(state = initialDataState, action) {
    switch(action.type) {
        case LOAD_DATA:
            return{
                ...state,
                data: action.data,
                loading: false
            }
        case SWITCH_THEME:
            console.log(action.val);
            return{
                ...state,
                nightMode: action.val
            }
        default:
            return state;
    }
}