import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { iGeneralInitialValue } from "./generalTypes"
type DarkMode = (key: string) => boolean;

let darkModeKey = 'dark-mode';
let DarkMode: DarkMode = (key) => {
    if (typeof window !== 'undefined') {
        const darkMode = localStorage.getItem(key);

        if (typeof darkMode == "string") {
            return JSON.parse(darkMode)
        }
        else {
            return false;
        }
    }
    else {
        return false
    }
}

const initialState: iGeneralInitialValue = {
    darkMode: DarkMode(darkModeKey),
    width: 1200,
    height: 980
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem(darkModeKey, JSON.stringify(action.payload));
            state.darkMode = action.payload;
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