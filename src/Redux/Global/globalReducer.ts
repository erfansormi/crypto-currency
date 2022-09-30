// types
import { iGlobalInitialValue, globalActionsTypes, globalActions } from "./globalTypes"

const initialValue: iGlobalInitialValue = {
    global: null,
    loading: false,
    error: ""
}

const globalReducer = (state = initialValue, action: globalActionsTypes) => {
    switch (action.type) {
        case globalActions.fetchRequest:
            state.loading = true;

            return {
                ...state
            }

        case globalActions.fetchRequestSuccess:
            state.global = action.payload;
            state.loading = false;

            return {
                ...state
            }

        case globalActions.fetchRequestFailure:
            state.loading = false;
            state.error = action.payload;

            return {
                ...state
            }

        default:
            return state;
    }
}

export default globalReducer;