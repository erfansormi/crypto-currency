import React from 'react'

// mui
import { CircularProgress } from '@mui/material';

const ChartSpinner = () => {
    return (
        <div className='flex flex-col justify-center align-center radius-5 neutral-1' style={{ height: 400 }}>
            <CircularProgress />
            <span className='mt-3'>Loading Data...</span>
        </div>
    )
}

export default ChartSpinner