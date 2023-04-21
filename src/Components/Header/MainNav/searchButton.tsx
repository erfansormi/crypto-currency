import React, { useState } from 'react'

// css
import styles from "./mainNav.module.css"

// icon
import { BiSearch } from "react-icons/bi"

// components
import ModalContainer from './modalContainer';

const SearchButton = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <div
                className={`${styles.input_container} header-input flex align-center pointer`}
                onClick={handleClickOpen}
            >
                <div className='flex align-center mr-3'>
                    <BiSearch />
                </div>
                <div className='flex align-center'>
                    search...
                </div>
            </div>

            {/* modal search bar */}
            <ModalContainer open={open} setOpen={setOpen} />
        </>
    )
}

export default SearchButton