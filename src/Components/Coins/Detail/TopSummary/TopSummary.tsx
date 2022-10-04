import React from 'react'

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// components
import NameSection from './NameSection';

const TopSummary = () => {
    return (
        <Grid container>
            <Grid xs={6}>
                <NameSection />
            </Grid>
            <Grid xs={6}>

            </Grid>
        </Grid>
    )
}

export default TopSummary