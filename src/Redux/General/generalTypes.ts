// interface
export interface iGeneralInitialValue {
    darkMode: boolean,
}

// enum
export enum generalActions {
    changeDarkMode = "CHANGE_DARK_MODE"
}

// action types
interface changeDarkMode {
    type: generalActions.changeDarkMode,
    payload: boolean,
}

export type generalActionsTypes = changeDarkMode;