import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../../Redux/store'
import globalFetchRequest from '../../../Redux/Global/globalActions'

// data
import { navInfoData, navDominanceData } from './NavData'

// css
import styles from "./nav.module.css"

// icon
import { BsArrowCounterclockwise } from "react-icons/bs"

// components
import SwitchDarkmode from './SwitchDarkMode'

const Nav = () => {
    const global = useSelector((state: State) => state.global.global);
    const general = useSelector((state: State) => state.general);
    const other = useSelector((state: State) => state.global);
    const dispatch = useDispatch<any>();

    // func
    const handleFetchData = () => {
        dispatch(globalFetchRequest())
    }
    let color = () => {
        if (general.darkMode) {
            return {
                color: "var(--color-light-neutral-3)"
            }
        }
        else {
            return {
                color: "var(--color-light-neutral-6)"
            }
        }
    }

    return (
        <nav className={styles.nav}>
            <div style={color()} >

                {/* loading */}
                {other.loading ?
                    <div style={{ padding: 15 }}>
                        Loading...
                    </div> :

                    // error
                    other.error ?
                        <div className={styles.error_container}>
                            <div>
                                {other.error}
                                <button onClick={handleFetchData}>
                                    <BsArrowCounterclockwise />
                                </button>
                            </div>
                        </div> :

                        // nav
                        <div className={styles.nav_content_container}>
                            {navInfoData(global).map((item) =>
                                <div
                                    key={item.value}
                                    className={styles.info_container}
                                >
                                    <span className={styles.text}>
                                        {item.text}:
                                    </span>
                                    <span className={styles.value}>
                                        {item.value}
                                    </span>
                                </div>
                            )}
                            <div className={styles.dominance_container}>
                                <span className={styles.text}>
                                    {navDominanceData(global).text}
                                </span>
                                {navDominanceData(global).value.map(item =>
                                    <div
                                        key={item.value}
                                        className={styles.dominance_value}
                                    >
                                        <span>
                                            {item.text}
                                        </span>
                                        <span>
                                            {item.value}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                }
                <div className={styles.darkMode_container}>
                    <SwitchDarkmode />
                </div>
            </div>
        </nav >
    )
}

export default Nav