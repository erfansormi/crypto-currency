import React from 'react'
import TopNav from './TopNav/TopNav'
import MainNav from './MainNav/MainNav'
import HeaderLayout from './HeaderLayout'

const Header = () => {
    return (
        <header>
            <HeaderLayout>
                <TopNav />
            </HeaderLayout>
            <HeaderLayout border_none>
                <MainNav />
            </HeaderLayout>
        </header>
    )
}

export default Header