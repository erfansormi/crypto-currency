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

        .border-b-color{
            ${darkMode ?
                `border-bottom:1px solid var(--border-color-dark)` :
                `border-bottom:1px solid var(--border-color)`
            }
        }

        .border-b-color:last-child{
            border-bottom:0;
        }
        `} />
    )
}

export default GlobalStyles