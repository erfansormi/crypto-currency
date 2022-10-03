import { iGeneralInitialValue, generalActionsTypes, generalActions } from "./generalTypes"

const initialValue: iGeneralInitialValue = {
    darkMode: false,
}

const generalReducer = (state = initialValue, action: generalActionsTypes) => {
    switch (action.type) {
        case generalActions.changeDarkMode:
            state.darkMode = !state.darkMode;

            return {
                ...state
            }

        default:
            return state
    }
}

export default generalReducer;