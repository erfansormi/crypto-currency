import React from 'react'
import TopNav from './TopNav/TopNav'
import MainNav from './MainNav/MainNav'
import HeaderLayout from './HeaderLayout'
import { Box, Divider } from '@mui/material'

const Header = () => {
    return (
        <Box
            className="border-b sticky -top-18 right-0 left-0"
            component={"header"}
            sx={{ bgcolor: "background.default", color: "text.primary", fontWeight: "bold", zIndex: 50 }}
        >
            <HeaderLayout>
                <TopNav />
            </HeaderLayout>
            <Divider />
            <HeaderLayout border_none>
                <MainNav />
            </HeaderLayout>
        </Box>
    )
}

export default Header