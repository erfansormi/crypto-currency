import React from 'react';

// data
import { navInfoData, navDominanceData } from './NavData';

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
            className="flex align-center fs-1"
            style={{ height: 53 }}
        >
            <div className='text-neutral-5 flex justify-between full align-center' >

                {/* loading */}
                {
                    isLoading ?
                        <div style={{ padding: 15 }}>
                            Loading...
                        </div> :

                        // error
                        error ?
                            <div className={"down-color pointer"} onClick={() => refetch()}>
                                <div className='h-100 flex align-center'>
                                    <span className='mr-1'>
                                        failed to load
                                    </span>
                                    <button className="down-color flex fs-3">
                                        <BsArrowCounterclockwise />
                                    </button>
                                </div>
                            </div> :

                            // nav
                            <div className={`flex align-center full mr-3 overflow-x-auto`}>
                                {navInfoData(data.data).map((item, index) =>
                                    <div
                                        key={index * 6 + 27}
                                        className={"flex align-center"}
                                    >
                                        <span className={"capitalize max-content"}>
                                            {item.text}:
                                        </span>
                                        <span className={"primary-color mr-4 ml-2 max-content"}>
                                            {item.value}
                                        </span>
                                    </div>
                                )}
                                <div className={"flex"}>
                                    <span className={"mr-2 capitalize"}>
                                        {navDominanceData(data.data).text}
                                    </span>
                                    {navDominanceData(data.data).value.map((item, index) =>
                                        <div
                                            key={index * 6 + 28}
                                            className={"primary-color flex mr-2"}
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
                <div>
                    <SwitchDarkMode />
                </div>
            </div>
        </Box>
    )
}

export default TopNav