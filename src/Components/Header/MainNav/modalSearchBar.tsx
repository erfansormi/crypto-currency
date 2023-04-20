import React from 'react'
import axios from 'axios';

// css
import styles from "./mainNav.module.css";

// icon
import { BiSearch } from "react-icons/bi";

// mui
import { TextField } from '@mui/material';

// ts
import { SearchBarInitialValues } from '../../../types/Coins/coinsTypes';

interface Props {
    values: SearchBarInitialValues,
    setValues: React.Dispatch<React.SetStateAction<SearchBarInitialValues>>
}

const ModalSearchBar = ({ values, setValues }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, searchedText: event.target.value, helperText: "" })
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (values.searchedText.length >= 1) {
            setValues({ ...values, loading: true })
            
            axios.get(`https://api.coingecko.com/api/v3/search?query=${values.searchedText}`)
                .then(response => {
                    setValues({
                        ...values,
                        loading: false,
                        data: { ...response.data },
                    })
                })

                .catch(err => {
                    setValues({
                        ...values,
                        loading: false,
                        error: err.message
                    })
                })
        }
        else {
            setValues({ ...values, helperText: "you must enter a character!" })
        }
    }

    return (
        <div className={styles.searchBox_container}>
            <form
                className={styles.searchBox}
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Search Coins"
                    variant="outlined"
                    value={values.searchedText}
                    onChange={handleChange}
                    spellCheck={false}
                    helperText={values.helperText ? values.helperText : false}
                    error={values.helperText ? true : false}
                />
                <span
                    className={styles.search_icon}
                    onClick={handleSubmit}
                >
                    <BiSearch />
                </span>
            </form>
        </div>
    )
}

export default ModalSearchBar;