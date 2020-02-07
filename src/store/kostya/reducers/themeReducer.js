import {CHANGE_TO_DARK, CHANGE_TO_LIGHT} from "../actions/theme/types";

const initialState = {
    theme: 'light'
};

export default function (state = initialState, action) {
    switch(action.type) {
        case CHANGE_TO_DARK:
            return {
                ...state,
                theme: 'dark'
            };
        case CHANGE_TO_LIGHT:
            return {
                ...state,
                theme: 'light'
            };
        default:
            return state;
    }}