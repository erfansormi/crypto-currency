import React from 'react'

// emotion
import { Global, css } from '@emotion/react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

const GlobalStyles = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);

    return (
        <Global styles={css`

        .tr-hover:hover{
            ${darkMode ?
                `
                    background-color: #1a1b22 !important;
                ` :
                `
                background-color: var(--theme-light-blue) !important;
                `
            }
        }

        body{
            ${darkMode ?
                `
                    background-color: var(--dark-bg-1) !important;
                    color: #fff !important;
                ` :
                `
                background-color: #fff !important;
                color: var(--dark-bg-1) !important;
                `
            }
        }

        .root-nodes{
            ${darkMode ?
                `
                    border-bottom: 1px solid var(--border-color-dark) !important;
                    background-color: var(--dark-bg-1) !important;
                    color: #fff !important;
                ` :
                `
                border-bottom: 1px solid var(--border-color) !important;
                background-color: #fff !important;
                color: var(--dark-bg-1) !important;
                `
            }
        }

        .root-nodes:last-child{
            border-bottom:0 !important;
        }

        .neutral-1{
            ${darkMode ?
                `background-color:var(--color-neutral-1);
            color: var(--color-neutral-6);`:
                `background-color:var(--color-light-neutral-1);
            color: var(--color-light-neutral-6);`
            }
        }

        .ice-bg{
            background:${darkMode ? "var(--dark-ice-bg-1)" : "var(--ice-bg-1)"};
        }

        .pillName{
            line-height: 18px;
            font-weight: 600;
            border-radius: 4px;
            padding: 4px 6px;
            ${darkMode ?
                `background-color:var(--color-neutral-2);
            color: var(--color-neutral-6);`:
                `background-color:var(--color-light-neutral-2);
            color: var(--color-light-neutral-6);`
            }
        }

        .pillName-primary {
            background-color: var(--color-light-neutral-5) !important;
            color: rgb(255, 255, 255) !important;
        }

        .down-bg{
            padding:4px 6px;
            border-radius:6px;
            background-color:var(--down-color);
            color:#fff !important;
        }

        .up-bg{
            padding:4px 6px;
            border-radius:6px;
            background-color:var(--up-color);
            color:#fff !important;
        }

        .neutral-bg{
            padding:4px 6px;
            border-radius:6px;
            background-color:var(--color-neutral-5);
            color:#fff !important;
        }

        .down-color{
            color:var(--down-color) !important;
        }

        .up-color{
            color:var(--up-color) !important;
        }

        .neutral-color{
            color:var(--color-neutral-2) !important;
        } 

        .light-color{
            ${darkMode ?
                `color:var(--color-neutral-6);` :
                `color:var(--color-light-neutral-6);`
            }
        }

        .progress-bar{
            width:100%;
            height: 7px;
            display: block;
            border-radius:4px;
            ${darkMode ?
                `background-color:var(--color-light-neutral-6);` :
                `background-color:var(--color-neutral-6)`
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

        .border-color{
            ${darkMode ?
                `border:1px solid var(--border-color-dark)` :
                `border:1px solid var(--border-color)`
            }
        }

        .border-b-color:last-child{
            border-bottom:0;
        }

        .border-b-color , .border-b-color:first-child{
            ${darkMode ?
                `border-bottom:1px solid var(--border-color-dark)` :
                `border-bottom:1px solid var(--border-color)`
            }
        }

        .error-alert{
            ${darkMode ? `background-color:var(--error-dark-alert-bg);` :
                `background-color:var(--error-alert-bg);`
            }
            padding:10px 15px;
            border-radius:6px;
        }

        .neutral-alert{
            ${darkMode ? `background-color:var(--color-neutral-2);` :
                `background-color:var(--color-light-neutral-2);`
            }
            padding:10px 15px;
            border-radius:6px;
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
        animation-duration: 0.5s;
        }

        @keyframes input-box-shadow {
        50% {
            box-shadow: 0 0 7px 4px ${darkMode ? `var(--color-neutral-2)` : `#ccc`};
        }

        100% {
            box-shadow: none;
        }
}
        `} />
    )
}

export default GlobalStyles