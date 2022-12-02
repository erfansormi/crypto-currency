import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

// emotion
import { Global, css } from '@emotion/react'

// sass variables
import styles from "../../styles/sass/_variables.module.scss"

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

// ts
interface iProps {
    icon1: ReactJSXElement,
    icon2: ReactJSXElement,
    linksIcon: ReactJSXElement,
    links: string[],
    text: string
}

const HiddenLinks = ({ icon1, icon2, linksIcon, links, text }: iProps) => {
    const darkMode = useSelector((state: State) => state.general.darkMode);

    const removeBeginURL = (url: string) => {
        let splited = url.split(/https?:\/\//).toString().split(/www./).toString().split(/\/.*/).toString().split(",");
        let result = splited.join("").toString();
        return result;
    }

    const isLinksWork = () => {
        let i = 0;
        links.map((item) => item ? null : i++)
        if (i == links.length) {
            return false
        } else {
            return true
        }
    }

    const arrowSize = "1rem";
    const boxArrowSize = "0.8rem";
    return (
        <>
            <Global styles={css`
            .link-bg{
                width:fit-content;
                cursor:pointer;
                letter-spacing: 0.3px;
                transition:0.1s all ease-in;
                display:flex;
                align-items:center;
                line-height: 18px;
                font-weight: 600;
                border-radius: 6px;
                padding: 4px 6px;
                ${darkMode ?
                    `background-color: ${styles.color_neutral_2};
                color: #fff;`:
                    `background-color:${styles.color_light_neutral_2};
                color: #000;`
                }
                font-size:0.82rem !important;
            }
    
            .link-bg:hover{
                background-color: ${styles.color_light_neutral_5} !important;
                color: rgb(255, 255, 255) !important;
            }
    
            .link-bg:hover>span{
                color: rgb(255, 255, 255) !important;
            }
    
            .link-bg span{
                display:flex;
                margin:0 5px !important;
                font-size:1rem;
            }
    
            .hidden-links-container{
                visibility:hidden;
                position:absolute;
                top:26px;
                z-index:2;
            }
            
            .hidden-links{
                border-radius:6px;
                display:flex;
                flex-direction:column;
                padding:5px 0 0 0;
                ${darkMode ?
                    `background-color:${styles.color_neutral_2};
                    color:#fff;`:
                    `background-color:#fff;
                    color:#000;`
                }
                box-shadow: ${styles.box_shadow};
                font-size:0.82rem !important;
                margin-top:13px;
            } 
    
            .hidden-links::before ,.hidden-links::after{
                content: "";
                display: block;
                position: absolute;
                top: 10px;
                border-radius: 2px;
                left: calc(50% - (25px / 2));
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                width: 25px;
                height: 25px;
                background-color: #aaa;
                z-index: -1;
                box-shadow:var(--box-shadow);
    
                ${darkMode ?
                    `background-color: ${styles.color_neutral_2};` :
                    `background-color:#fff;
                        border: 1px solid #f9f9f9;`
                }
            }
    
            .link-container:hover .hidden-links-container{
                visibility:visible;
            }
    
            .hidden-links>a{
                display:flex;
                align-items:center;
                line-height:20px;
                padding:10px 14px;
                z-index:3;
            }
    
            .hidden-links>a:hover{
                ${darkMode ?
                    `background-color: ${styles.color_neutral_4};` :
                    `background-color: ${styles.color_light_neutral_2};`
                }
            }
    
            .hidden-links>a>span{
                display:flex;
                margin:0 5px !important;
            }
            `}
            />
            {isLinksWork() ?
                <>
                    <li className="link-bg">
                        <span>
                            {icon1}
                        </span>
                        {text}
                        <span className="light-color" style={{ fontSize: arrowSize }}>
                            {icon2}
                        </span>
                    </li>
                    <div className="hidden-links-container">
                        <div className="hidden-links">
                            {links.map((item, index) =>
                                item ?
                                    <a key={index * 6 + 23} href={item} target={"_blank"}>
                                        {removeBeginURL(item)}
                                        <span className="light-color" style={{ fontSize: boxArrowSize }}>
                                            {linksIcon}
                                        </span>
                                    </a> : null
                            )}
                        </div>
                    </div>
                </> : null
            }
        </>
    )
}

export default HiddenLinks