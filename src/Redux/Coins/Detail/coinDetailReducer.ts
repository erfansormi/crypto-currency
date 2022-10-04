import { CoinDetailInitialValue, coinDetailActionsType, coinDetailActions } from "./coinDetailTypes"

const initialValue: CoinDetailInitialValue = {
    chart: {
        loading: false,
        chart: null,
        error: ""
    },
    data: null,
    loading: false,
    error: ""
}

const coinDetailReducer = (state = initialValue, action: coinDetailActionsType) => {
    switch (action.type) {
        case coinDetailActions.dataFetchRequest:
            state.loading = true;

            return {
                ...state
            }

        case coinDetailActions.dataFetchRequestSuccess:
            state.loading = false;
            state.data = action.payload;

            return {
                ...state
            }

        case coinDetailActions.dataFetchRequestFailure:
            state.loading = false;
            state.error = action.payload;

            return {
                ...state
            }

        case coinDetailActions.chartFetchRequest:
            state.chart.loading = true;

            return {
                ...state
            }

        case coinDetailActions.chartFetchRequestSuccess:
            state.chart.loading = false;
            state.chart.chart = action.payload;

            return {
                ...state
            }

        case coinDetailActions.chartFetchRequestFailure:
            state.chart.loading = false;
            state.chart.error = action.payload;

            return {
                ...state
            }

        default:
            return state
    }
}

export default coinDetailReducer;