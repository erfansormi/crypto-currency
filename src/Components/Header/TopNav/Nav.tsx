import React, { useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../../Redux/store'
import { globalFetchRequestSuccess, globalFetchRequestFailure, globalLoading } from '../../../Redux/Global/globalSlice'

// data
import { navInfoData, navDominanceData } from './NavData'

// css
import styles from "./nav.module.css"

import { BsArrowCounterclockwise } from "react-icons/bs"

// components
import SwitchDarkmode from '../../Other/SwitchDarkMode'
import ClientOnly from '../../Other/ClientOnly'

// api
import axios from 'axios'

const Nav = () => {
    const dispatch = useDispatch();
    const global = useSelector((state: State) => state.global);

    const handleFetchData = () => {
        dispatch(globalLoading());

        axios.get("https://api.coingecko.com/api/v3/global")
            .then((res) => {
                dispatch(globalFetchRequestSuccess(res.data.data))
            })
            .catch((err) => {
                dispatch(globalFetchRequestFailure(err.message))
            })
    }

    useEffect(() => {
        dispatch(globalLoading());
        
        axios.get("https://api.coingecko.com/api/v3/global")
            .then((res) => {
                dispatch(globalFetchRequestSuccess(res.data.data))
            })
            .catch((err) => {
                dispatch(globalFetchRequestFailure(err.message))
            })
    }, [])

    return (
        <nav className={`border-b-color ${styles.nav}`}>
            <div className='light-color' >

                {/* loading */}
                {global.loading ?
                    <div style={{ padding: 15 }}>
                        Loading...
                    </div> :

                    // error
                    global.error ?
                        <div className={styles.error_container}>
                            <div>
                                {global.error}
                                <button onClick={handleFetchData}>
                                    <BsArrowCounterclockwise />
                                </button>
                            </div>
                        </div> :

                        // nav
                        <div className={styles.nav_content_container}>
                            {navInfoData(global.data).map((item, index) =>
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
                                    {navDominanceData(global.data).text}
                                </span>
                                {navDominanceData(global.data).value.map((item, index) =>
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
                <ClientOnly>
                    <div className={styles.darkMode_container}>
                        <SwitchDarkmode />
                    </div>
                </ClientOnly>
            </div>
        </nav >
    )
}

export default Nav