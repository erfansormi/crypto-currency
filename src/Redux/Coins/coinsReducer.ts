// types
import { iCoinsInitialValue, coinsActionsTypes, coinsActions } from "./coinsTypes"

const initialValue: iCoinsInitialValue = {
    coins: null,
    loading: false,
    error: "",
    page: 1
}

const coinsReducer = (state = initialValue, action: coinsActionsTypes) => {
    switch (action.type) {
        case coinsActions.fetchRequest:
            state.loading = true;

            return {
                ...state
            }

        case coinsActions.fetchRequestSuccess:
            state.loading = false;
            state.coins = action.payload;

            return {
                ...state
            }

        case coinsActions.fetchRequestFailure:
            state.loading = false;
            state.error = action.payload;

            return {
                ...state
            }

        case coinsActions.pageHandleChange:
            state.page = action.payload;

            return {
                ...state
            }

        default:
            return state;
    }
}

export default coinsReducer;