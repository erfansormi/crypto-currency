import React from 'react';
import { Global, css } from '@emotion/react';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

// sass variables
import styles from "../../styles/sass/_variables.module.scss";

const BgColors = () => {
    const { darkMode } = useSelector((state: State) => state.general);

    return (
        <Global styles={css`
        .bg-neutral-1{
            ${darkMode ?
                `background-color:${styles.color_neutral_1};` :
                `background-color:${styles.color_light_neutral_1};`
            }
        }

        .ice-bg{
            background:${darkMode ? `${styles.dark_ice_bg_1}` : `${styles.ice_bg_1}`};
        }

        .badge{
            line-height: 18px;
            font-weight: 600;
            border-radius: 4px;
            padding: 4px 6px;
            ${darkMode ?
                `background-color:${styles.color_neutral_3};
            color: ${styles.color_neutral_6};` :
                `background-color:${styles.color_light_neutral_2};
            color: ${styles.color_light_neutral_6};`
            }
        }

        .badge-primary {
            background-color: ${styles.color_light_neutral_5} !important;
            color: rgb(255, 255, 255) !important;
        }

        .progress-bar{
            width:100%;
            height: 7px;
            display: block;
            border-radius:4px;
            ${darkMode ?
                `background-color:${styles.color_light_neutral_6};` :
                `background-color:${styles.color_neutral_6};`
            }
        }

        .progress-value{
            ${darkMode ?
                `background-color:rgb(189 206 221);` :
                `background: rgb(6, 44, 76);`
            }
            height: 100%;
            display: block;
            border-radius:4px;
            max-width:100%;
        }

        .item-hover{
            transition: 0.2s;
            transition-property:background;
        }

        .item-hover:hover{
            ${darkMode ?
                `background-color: #1a1b22 !important;` :
                `background-color: ${styles.theme_light_blue} !important;`
            }
        }
        `} />
    )
}

export default BgColors;