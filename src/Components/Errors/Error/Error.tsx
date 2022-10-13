import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

// css
import styles from "./error.module.css"

// imgs
import errorImg from "../../../assets/images/error.jpg";
import darkErrorImg from "../../../assets/images/dark-error.jpg";

// icon
import { BsArrowCounterclockwise } from "react-icons/bs"

// redux
import { useSelector } from 'react-redux';
import { State } from "../../../Redux/store"

// ts
interface iProps {
    errorMessage: string;
}

const Error = ({ errorMessage }: iProps) => {
    const darkMode = useSelector((state: State) => state.general.darkMode)

    // title
    window.document.title = "404 error | Page not found"

    return (
        <div className={`md-shadow ${styles.container}`}>
            <Grid container spacing={4}>
                <Grid xs={12} md={6}>
                    <div className={styles.img_container}>
                        <img
                            src={darkMode ? darkErrorImg : errorImg}
                            alt="error occurred"
                            className={"err-dark-img lg-shadow"}
                            loading={"lazy"}
                        />
                    </div>
                </Grid>
                <Grid xs={12} md={6}>
                    <div className={styles.texts_container}>
                        <div className={styles.text_container}>
                            <p className='down-color error-alert'>
                                an error has been occurred!
                            </p>
                        </div>
                        <div className={styles.text_container}>
                            <p className='light-color neutral-alert'>
                                please try again a few minutes latar!
                            </p>
                        </div>
                        <div className={styles.text_container}>
                            <p className='down-color error-alert'>
                                problem {"->"} {errorMessage}!
                            </p>
                        </div>
                        <div className={styles.text_container}>
                            <p
                                className='light-color neutral-alert'
                                onClick={() => window.location.reload()}
                            >
                                click here to reload page!
                                <span onClick={() => window.document.location.reload()}><BsArrowCounterclockwise /></span>
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Error