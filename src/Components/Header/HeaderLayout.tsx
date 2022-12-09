import React from 'react'

interface Props {
    children: React.ReactNode,
    border_none?: boolean
}

const HeaderLayout = ({ children, border_none }: Props) => {
    return (
        <div className={`px-5 ${border_none ? "" : "border-b-color"}`}>
            {children}
        </div>
    )
}

export default HeaderLayout;