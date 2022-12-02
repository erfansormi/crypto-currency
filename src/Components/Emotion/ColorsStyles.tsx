import React from 'react'

// sass variables
import styles from "../../styles/sass/_variables.module.scss";

// emotion
import { Global, css } from '@emotion/react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

const ColorsStyles = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);

    return (
        <Global styles={css`
        body{
            ${darkMode ?
                `
                    background-color: ${styles.dark_bg_1} !important;
                    color: #fff !important;
                ` :
                `
                background-color: #fff !important;
                color: ${styles.dark_bg_1} !important;
                `
            }
        }

        .root-nodes{
            ${darkMode ?
                `
                    border-bottom: 1px solid ${styles.border_color_dark} !important;
                    background-color: ${styles.dark_bg_1} !important;
                    color: #fff !important;
                ` :
                `
                border-bottom: 1px solid ${styles.border_color} !important;
                background-color: #fff !important;
                color: ${styles.dark_bg_1} !important;
                `
            }
        }

        .root-nodes:last-child{
            border-bottom:0 !important;
        }
        
        .neutral-1{
            ${darkMode ?
                `background-color:${styles.color_neutral_1};
            color: ${styles.color_neutral_6};` :
                `background-color:${styles.color_light_neutral_1};
            color: ${styles.color_light_neutral_6};`
            }
        }

        .ice-bg{
            background:${darkMode ? `${styles.dark_ice_bg_1}` : `styles.ice_bg_1`};
        }

        .pillName{
            line-height: 18px;
            font-weight: 600;
            border-radius: 4px;
            padding: 4px 6px;
            ${darkMode ?
                `background-color:${styles.color_neutral_2};
            color: ${styles.color_neutral_6};` :
                `background-color:${styles.color_light_neutral_2};
            color: ${styles.color_light_neutral_6};`
            }
        }

        .pillName-primary {
            background-color: ${styles.color_light_neutral_5} !important;
            color: rgb(255, 255, 255) !important;
        }

        .light-color{
            ${darkMode ?
                `color:${styles.color_neutral_6};` :
                `color:${styles.color_light_neutral_6};`
            }
        }

        .normal-color{
            color:${darkMode ? "#fff" : "#111"}
        }

        .error-alert{
            ${darkMode ? `background-color:${styles.error_dark_alert_bg};` :
                `background-color:${styles.error_alert_bg};`
            }
            padding:10px 15px;
            border-radius:6px;
        }

        .neutral-alert{
            ${darkMode ? `background-color:${styles.color_neutral_2};` :
                `background-color:${styles.color_light_neutral_2};`
            }
            padding:10px 15px;
            border-radius:6px;
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
        `} />
    )
}

export default ColorsStyles;