import {CHANGE_TO_DARK, CHANGE_TO_LIGHT} from "../action/types";

const initialState = {
    theme: localStorage.getItem('theme') || 'light'
}

export default function (state = initialState, action) {
    switch(action.type) {
        case CHANGE_TO_DARK:
            return {
                ...state,
                theme: 'dark'
            }
        case CHANGE_TO_LIGHT:
            return {
                ...state,
                theme: 'light'
            }
        default:
            return state;
}}