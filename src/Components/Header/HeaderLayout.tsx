import React from 'react'

interface Props {
    children: React.ReactNode,
    border_none?: boolean
}

const HeaderLayout = ({ children, border_none }: Props) => {
    return (
        <div style={{ padding: "0 15px" }} className={`${border_none ? "" : "border-b-color"}`}>
            {children}
        </div>
    )
}

export default HeaderLayout;