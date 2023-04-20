import React from 'react'

// sass variables
import styles from "../../styles/sass/_variables.module.scss";

// emotion
import { Global, css } from '@emotion/react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

const TextColors = () => {
    const { darkMode } = useSelector((state: State) => state.general);

    return (
        <Global styles={css`
        .text-neutral-1{
            ${darkMode ?
                `color:${styles.color_light_neutral_1} !important;` :
                `color:${styles.color_neutral_1} !important;`
            }
        }

        .text-neutral-2{
            ${darkMode ?
                `color:${styles.color_light_neutral_2} !important;` :
                `color:${styles.color_neutral_2} !important;`
            }
        }

        .text-neutral-3{
            ${darkMode ?
                `color:${styles.color_light_neutral_3} !important;` :
                `color:${styles.color_neutral_3} !important;`
            }
        }

        .text-neutral-4{
            ${darkMode ?
                `color:${styles.color_light_neutral_4} !important;` :
                `color:${styles.color_neutral_4} !important;`
            }
        }

        .text-neutral-5{
            ${darkMode ?
                `color:${styles.color_light_neutral_5} !important;` :
                `color:${styles.color_neutral_5} !important;`
            }
        }

        .text-neutral-6{
            ${darkMode ?
                `color:${styles.color_light_neutral_6} !important;` :
                `color:${styles.color_neutral_6} !important;`
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
        `} />
    )
}

export default TextColors;