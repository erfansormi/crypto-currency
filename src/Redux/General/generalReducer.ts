import { iGeneralInitialValue, generalActionsTypes, generalActions } from "./generalTypes"

let darkModeKey = 'dark-mode';
let DarkMode: (key: string) => boolean = (key) => {
    const darkMode = window.localStorage.getItem(key);
    if (typeof darkMode == "string") {
        return JSON.parse(darkMode)
    }
    else {
        return false;
    }
}

const initialValue: iGeneralInitialValue = {
    darkMode: DarkMode(darkModeKey)
}

const generalReducer = (state = initialValue, action: generalActionsTypes) => {
    switch (action.type) {
        case generalActions.changeDarkMode:
            window.localStorage.setItem(darkModeKey, JSON.stringify(!state.darkMode));
            state.darkMode = !state.darkMode;

            return {
                ...state
            }

        default:
            return state
    }
}

export default generalReducer;