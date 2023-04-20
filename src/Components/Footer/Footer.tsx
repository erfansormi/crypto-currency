import React from 'react';
import { Box } from '@mui/material';

// css
import styles from "./footer.module.css"

// icon
import { BsBoxArrowUpRight } from "react-icons/bs"

const Footer = () => {
    return (
        <Box
            sx={{ bgColor: "background.default" }}
            component={"footer"}
            className={`${styles.footer} border-t`}
        >
            <div className="text-neutral-5">
                <div>
                    © 2022 Crypto Currency. All rights website reserved.
                </div>
                <div className="align-center">
                    Created By
                    <a
                        href="https://erfansormi.vercel.app"
                        target={"_blank"}
                        className="align-center normal-color"
                    >
                        Erfan Sormi
                        <span>
                            <BsBoxArrowUpRight />
                        </span>
                    </a>
                </div>
            </div>
        </Box>
    )
}

export default Footer
