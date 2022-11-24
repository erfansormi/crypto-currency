import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { iGeneralInitialValue } from "./generalTypes"

let darkModeKey = 'dark-mode';
let DarkMode: (key: string) => boolean = (key) => {
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
    darkMode: DarkMode(darkModeKey)
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem(darkModeKey, JSON.stringify(action.payload));
            state.darkMode = action.payload;
        }
    }
})

export const { changeDarkMode } = generalSlice.actions;
export default generalSlice.reducer;