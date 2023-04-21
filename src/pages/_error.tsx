import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// icon
import { BsArrowCounterclockwise } from "react-icons/bs";

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
            <div className='md-shadow m-sm-7 p-3 p-3 radius-4 p-sm-15 fs-4'>
                <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <div className="w-full h-auto object-cover">
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
                        <div className="h-full flex flex-col justify-evenly capitalize gap-y-4">
                            <div className="flex">
                                <p className='down-color error-alert'>
                                    an error has been occurred!
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <p className='text-neutral-5 neutral-alert'>
                                    please try again a few minutes later!
                                </p>
                            </div>
                            <div className="flex">
                                <p className='down-color error-alert'>
                                    problem {"->"} {errorMessage}!
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <p
                                    className='text-neutral-5 neutral-alert pointer'
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