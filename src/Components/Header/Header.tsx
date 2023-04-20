import React from 'react'
import TopNav from './TopNav/TopNav'
import MainNav from './MainNav/MainNav'
import HeaderLayout from './HeaderLayout'
import { Box, Divider } from '@mui/material'

const Header = () => {
    return (
        <Box className="border-b" component={"header"} sx={{ bgcolor: "background.default", color: "text.primary", fontWeight: "bold" }}>
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