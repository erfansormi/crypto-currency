import React from 'react';
import { Box } from '@mui/material';

// icon
import { BsBoxArrowUpRight } from "react-icons/bs"

const Footer = () => {
    return (
        <Box
            sx={{ bgColor: "background.default" }}
            component={"footer"}
            className="border-t py-10 px-8 flex align-center"
        >
            <div className="text-neutral-5 flex md-flex-row flex-col w-full justify-between md-align-center gap-y-4">
                <div>
                    © 2022 Crypto Currency. All rights website reserved.
                </div>
                <div className="align-center">
                    Created By
                    <a
                        href="https://erfansormi.ir"
                        target={"_blank"}
                        className="align-center normal-color ml-1"
                    >
                        Erfan Sormi
                        <span className='ml-1 mt-1 fs-2'>
                            <BsBoxArrowUpRight />
                        </span>
                    </a>
                </div>
            </div>
        </Box>
    )
}

export default Footer
