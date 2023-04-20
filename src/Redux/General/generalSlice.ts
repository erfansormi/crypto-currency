import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { iGeneralInitialValue } from "./generalTypes";

const darkModeKey = 'dark-mode';
export let handleDarkMode = () => {
    if (typeof window !== 'undefined') {
        const darkMode = localStorage.getItem(darkModeKey);

        if (typeof darkMode == "string" && JSON.parse(darkMode) === true) {
            return true;
        }
        return false;
    }
    return false
}

const initialState: iGeneralInitialValue = {
    darkMode: false,
    width: 1200,
    height: 980
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            if (typeof window !== "undefined") {
                localStorage.setItem(darkModeKey, JSON.stringify(action.payload));
                state.darkMode = action.payload;
            }
            else {
                state.darkMode = action.payload;
            }
        },

        updateWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload;
        },

        updateHeight: (state, action: PayloadAction<number>) => {
            state.height = action.payload;
        }
    }
})

export const { changeDarkMode, updateHeight, updateWidth } = generalSlice.actions;
export default generalSlice.reducer;