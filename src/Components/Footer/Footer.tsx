import React from 'react'

// css
import styles from "./footer.module.css"

// icon
import { AiOutlineLink } from "react-icons/ai"
import { BsBoxArrowUpRight } from "react-icons/bs"

//redux
import { useSelector } from 'react-redux'
import { State } from '../../Redux/store'

const Footer = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode)

    return (
        <footer className={styles.footer}>
            <div className="light-color">
                <div>
                    © 2022 Crypto Currency. All rights website reserved.
                </div>
                <div className="align-center">
                    Created By
                    <a
                        href="https://erfansormi.netlify.app"
                        target={"_blank"}
                        style={darkMode ? { color: "#fff" } : { color: "#111" }}
                        className="align-center"
                    >
                        Erfan Sormi
                        <span>
                            <BsBoxArrowUpRight />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer