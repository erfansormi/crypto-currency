import React from 'react'
import { Link } from 'react-router-dom'

// redux
import { useSelector } from 'react-redux'
import { State } from '../../../Redux/store'

// css
import styles from "./mainNav.module.css"

// img
import logo from "../../../assets/images/logo.png"
import lightLogo from "../../../assets/images/light-logo.png"

// icon
import { BiSearch } from "react-icons/bi"

const MainNav = () => {
    const darkMode = useSelector((state: State) => state.general.darkMode);

    return (
        <nav className={styles.container}>
            <div className={styles.layout_container}>
                <div className={styles.section_1}>
                    <div>
                        <Link to={"/"} className={`align-center`}>
                            <img src={darkMode ? lightLogo : logo} alt="crypto logo" className={styles.logo_img} />
                            <h2>
                                crypto currency
                            </h2>
                        </Link>
                    </div>
                </div>
                <div className={styles.section_2}>
                    <div>
                        <div className={`${styles.input_container} header-input align-center`}>
                            <div>
                                <BiSearch />
                            </div>
                            <div>
                                serach...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNav