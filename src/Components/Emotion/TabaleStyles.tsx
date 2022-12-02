import React from 'react'

// sass variables
import styles from "../../styles/sass/_variables.module.scss";

// emotion
import { Global, css } from '@emotion/react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

const TabaleStyles = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);

    return (
        <Global styles={css`

        .tr-hover:hover{
            ${darkMode ?
                `
                    background-color: #1a1b22 !important;
                ` :
                `
                background-color: ${styles.theme_light_blue} !important;
                `
            }
        }

        .tr-color{
            ${darkMode ?
                `color: ${styles.color_light_neutral_3} !important` :
                `color: ${styles.dark_bg_1} !important`
            }
        }
        `} />
    )
}

export default TabaleStyles;