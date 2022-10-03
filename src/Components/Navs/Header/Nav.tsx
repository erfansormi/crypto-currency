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
    const other = useSelector((state: State) => state.global);
    const dispatch = useDispatch<any>();

    // func
    const handleFetchData = () => {
        dispatch(globalFetchRequest())
    }

    return (
        <nav className={styles.nav}>

            {/* loading */}
            {other.loading ?
                <div>
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
                    <div>
                        <div>
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
                        <div>
                            <SwitchDarkmode />
                        </div>
                    </div>
            }
        </nav >
    )
}

export default Nav