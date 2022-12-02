import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'

// css
import styles from "../styles/css/error.module.css"

// icon
import { BsArrowCounterclockwise } from "react-icons/bs"

// redux
import { useSelector } from 'react-redux';
import { State } from "../Redux/store"

// ts
interface iProps {
    errorMessage: string;
}

const Error = ({ errorMessage }: iProps) => {
    const darkMode = useSelector((state: State) => state.general.darkMode)
    const router = useRouter();

    return (
        <>
            <Head>
                <title>
                    An error occurred | {errorMessage}
                </title>
            </Head>
            <div className={`md-shadow ${styles.container}`}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <div className={styles.img_container}>
                            <Image
                                width={750}
                                height={500}
                                src={darkMode ? "/images/dark-error.jpg" : "/images/error.jpg"}
                                alt="error occurred"
                                className={"err-dark-img lg-shadow"}
                                priority
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
                                    onClick={() => router.reload()}
                                >
                                    click here to reload page!
                                    <span><BsArrowCounterclockwise /></span>
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Error