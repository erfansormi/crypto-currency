import { generalActions } from "./generalTypes"

export const changeDarkMode = (darkMode: boolean) => {
    return {
        type: generalActions.changeDarkMode,
        payload: darkMode
    }
}