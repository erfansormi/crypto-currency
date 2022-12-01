import React from 'react'

// css
import styles from "./footer.module.css"

// icon
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
                        href="https://erfansormi.vercel.app"
                        target={"_blank"}
                        className="align-center normal-color"
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