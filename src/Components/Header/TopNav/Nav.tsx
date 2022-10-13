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
import SwitchDarkmode from '../../Other/SwitchDarkMode'

const Nav = () => {
    const global = useSelector((state: State) => state.global.global);
    const other = useSelector((state: State) => state.global);
    const dispatch = useDispatch<any>();

    // func
    const handleFetchData = () => {
        dispatch(globalFetchRequest())
    }

    return (
        <nav className={`border-b-color ${styles.nav}`}>
            <div className='light-color' >

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
                            {navInfoData(global).map((item, index) =>
                                <div
                                    key={index * 6 + 27}
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
                                {navDominanceData(global).value.map((item, index) =>
                                    <div
                                        key={index * 6 + 28}
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