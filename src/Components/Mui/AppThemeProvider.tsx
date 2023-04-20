import React from "react";
import { CssBaseline, PaletteMode } from "@mui/material";
import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// redux
import { useSelector } from "react-redux";
import { State } from "../../Redux/store";

// sass variables
import variables from "../../styles/sass/_variables.module.scss";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}

export const getTheme = (mode: PaletteMode) => createTheme({
    status: {
        danger: orange[500],
    },

    palette: {
        mode,
        primary: {
            main: "#3861fb"
        },
        ...(mode === "dark" ?
            {
                divider: variables.border_color_dark,
                text: {
                    primary: "#fff"
                },
                background: {
                    default: variables.dark_bg_1,
                    paper: variables.dark_bg_1
                },
                neutral: {
                    main: variables.color_neutral_1,
                    contrastText: '#fff',
                },
            } :
            {
                divider: variables.border_color,
                text: {
                    primary: variables.dark_bg_1
                },
                background: {
                    default: "#fff",
                    paper: "#fff"
                },
                neutral: {
                    main: variables.color_light_neutral_1,
                    contrastText: variables.dark_bg_1,
                },
            }
        )
    },
    typography: {
        fontFamily: "inherit"
    }
});

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { darkMode } = useSelector((state: State) => state.general);
    const theme = React.useMemo(() => getTheme(darkMode ? "dark" : "light"), [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider;