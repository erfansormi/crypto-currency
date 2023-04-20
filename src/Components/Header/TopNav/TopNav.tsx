import React from 'react';

// data
import { navInfoData, navDominanceData } from './NavData';

// css
import styles from "./nav.module.css";

// icon
import { BsArrowCounterclockwise } from "react-icons/bs";

// get data with react query hook
import { useGlobalData } from './hooks';

// components
import SwitchDarkMode from '../../Other/SwitchDarkMode';
import { Box } from '@mui/material';

const TopNav = () => {
    const { error, data, isLoading, refetch } = useGlobalData();

    return (
        <Box
            component="nav" sx={{ bgcolor: "background.default" }}
            className={`d-flex align-center ${styles.nav}`}
        >
            <div className='text-neutral-5' >

                {/* loading */}
                {
                    isLoading ?
                        <div style={{ padding: 15 }}>
                            Loading...
                        </div> :

                        // error
                        error ?
                            <div className={"down-color pointer"} onClick={() => refetch()}>
                                <div className='h-100 d-flex align-center'>
                                    <span className='mr-1'>
                                        failed to load
                                    </span>
                                    <button className="down-color d-flex fs-3">
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
                <div className={styles.darkMode_container}>
                    <SwitchDarkMode />
                </div>
            </div>
        </Box>
    )
}

export default TopNav