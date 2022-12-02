import React from 'react'

// emotion
import { Global, css } from '@emotion/react'

// sass variables
import styles from "../../styles/sass/_variables.module.scss";

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

const GlobalStyles = () => {
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

        .last-b-b:last-child{
            border-bottom:0 !important;
        }
        
        .border-color{
            ${darkMode ?
                `border:1px solid ${styles.border_color_dark};` :
                `border:1px solid ${styles.border_color};`
            }
        }

        .border-b-color{
            ${darkMode ?
                `border-bottom:1px solid ${styles.border_color_dark} !important;` :
                `border-bottom:1px solid ${styles.border_color} !important;`
            }
        }

        .err-dark-img{
            ${darkMode ?
                `
                filter: brightness(68%) saturate(137%);;
                ` : null
            }
        }

        .err-dark-img2{
            ${darkMode ?
                `
                filter: hue-rotate(182deg) invert(1) brightness(0.8) contrast(76%) opacity(0.3) saturate(260%);
                ` : null
            }
        }

        .sm-shadow{
            ${darkMode ?
                `
            box-shadow: 0 0 6px 3px #2d3746;
            `:
                `
            box-shadow: 0 0 6px 3px #ddd;
            `
            }
            border-radius: 8px;
        }

        .md-shadow{
            ${darkMode ?
                `
            box-shadow: 0 0 8px 5px #2d3746;
            `:
                `
            box-shadow: 0 0 8px 5px #ddd;
            `
            }
            border-radius: 8px;
            }

        .lg-shadow{
            ${darkMode ?
                `
            box-shadow: 0 0 9px 11px #2d3746;
            `:
                `
            box-shadow: 0 0 9px 11px #ddd;
            `
            }
        border-radius: 8px;
        }

        .header-input{
        padding:8px;
        border-radius:8px;
            ${darkMode ?
                `
        background-color: rgb(34, 37, 49);
        color: rgb(100, 107, 128);
        `:
                `
        background-color: rgb(239, 242, 245);
        color: rgb(166, 176, 195);
        `
            }
        }

        .header-input:hover{
        animation-name: input-box-shadow;
        animation-duration: 0.7s;
        }

        @keyframes input-box-shadow {
        50% {
            box-shadow: 0 0 7px 4px ${darkMode ? `${styles.color_neutral_2}` : `#ccc`};
        }

        100% {
            box-shadow: none;
        }
    }

    .invert-img{
        filter: invert(1);
    }

    .MuiPaginationItem-root{
        font-weight: 600 !important;
        ${darkMode ?
                `color:#fff !important;` :
                null
            }
    }
        `} />
    )
}

export default GlobalStyles;