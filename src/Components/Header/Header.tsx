import React from 'react'
import MainNav from './MainNav/MainNav'
import Nav from './TopNav/Nav'
import HeaderLayout from './HeaderLayout'

const Header = () => {
    return (
        <header>
            <HeaderLayout>
                <Nav />
            </HeaderLayout>
            <HeaderLayout border_none>
                <MainNav />
            </HeaderLayout>
        </header>
    )
}

export default Header