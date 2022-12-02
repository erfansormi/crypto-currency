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

    const handleFetchData = async () => {
        dispatch(globalLoading());

        await axios.get("https://api.coingecko.com/api/v3/global")
            .then((res) => {
                dispatch(globalFetchRequestSuccess(res.data.data))
            })
            .catch((err) => {
                dispatch(globalFetchRequestFailure(err.message))
            })
    }

    useEffect(() => {
        handleFetchData();
    }, [])

    return (
        <nav className={`align-center ${styles.nav}`}>
            <div className='light-color' >

                {/* loading */}
                {global.loading ?
                    <div style={{ padding: 15 }}>
                        Loading...
                    </div> :

                    // error
                    global.error ?
                        <div className={"down-color"}>
                            <div className='h-100 align-center'>
                                {global.error}
                                <button onClick={handleFetchData} className="down-color d-flex">
                                    <BsArrowCounterclockwise />
                                </button>
                            </div>
                        </div> :

                        // nav
                        <div className={`align-center full mr-3 ${styles.nav_content}`}>
                            {navInfoData(global.data).map((item, index) =>
                                <div
                                    key={index * 6 + 27}
                                    className={"align-center"}
                                >
                                    <span className={"capitalize max-content"}>
                                        {item.text}:
                                    </span>
                                    <span className={"primary-color mr-4 ml-2 max-content"}>
                                        {item.value}
                                    </span>
                                </div>
                            )}
                            <div className={"d-flex"}>
                                <span className={"mr-2 capitalize"}>
                                    {navDominanceData(global.data).text}
                                </span>
                                {navDominanceData(global.data).value.map((item, index) =>
                                    <div
                                        key={index * 6 + 28}
                                        className={"primary-color d-flex mr-2"}
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
        </nav>
    )
}

export default Nav