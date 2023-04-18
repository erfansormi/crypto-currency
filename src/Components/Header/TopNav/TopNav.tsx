import React from 'react';

// data
import { navInfoData, navDominanceData } from './NavData';

// css
import styles from "./nav.module.css";

// icon
import { BsArrowCounterclockwise } from "react-icons/bs";

// components
import SwitchDarkmode from '../../Other/SwitchDarkMode';
import ClientOnly from '../../Other/ClientOnly';

// get data with react query hook
import { useGlobalData } from './hooks';

const TopNav = () => {
    const { error, data, isLoading } = useGlobalData();

    return (
        <nav className={`d-flex align-center ${styles.nav}`}>
            <div className='light-color' >

                {/* loading */}
                {
                    isLoading ?
                        <div style={{ padding: 15 }}>
                            Loading...
                        </div> :

                        // error
                        error ?
                            <div className={"down-color"}>
                                <div className='h-100 d-flex align-center'>
                                    failed to load
                                    <button className="down-color d-flex">
                                        <BsArrowCounterclockwise />
                                    </button>
                                </div>
                            </div> :

                            // nav
                            <div className={`d-flex align-center full mr-3 ${styles.nav_content}`}>
                                {navInfoData(data.data).map((item, index) =>
                                    <div
                                        key={index * 6 + 27}
                                        className={"d-flex align-center"}
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
                                        {navDominanceData(data.data).text}
                                    </span>
                                    {navDominanceData(data.data).value.map((item, index) =>
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

export default TopNav