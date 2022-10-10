import React from 'react'
import MainNav from './MainNav/MainNav'
import Nav from './TopNav/Nav'

const Header = () => {
    return (
        <header style={{ padding: "0 15px" }}>
            <Nav />
            <MainNav />
        </header>
    )
}

export default Header