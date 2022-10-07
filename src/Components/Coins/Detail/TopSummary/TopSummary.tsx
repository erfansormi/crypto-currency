import React from 'react'

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// css
import styles from "./topSummary.module.css"

// components
import NameSection from './NameSection/NameSection';
import PriceSection from './PriceSection/PriceSection';
import LinkSection from './LinkSection/LinkSection';
import TagSection from './TagSection/TagSection';
import StatesSection from './StatesSection/StatesSection';

const TopSummary = () => {
    return (
        <Grid container className={styles.grid_container}>
            <Grid xs={6} spacing={2}>
                <NameSection />
            </Grid>
            <Grid xs={6} spacing={2}>
                <PriceSection />
            </Grid>
            <Grid xs={6} spacing={2}>
                <LinkSection />
            </Grid>
            <Grid xs={6} spacing={2}>
                <TagSection />
            </Grid>
            <Grid xs={12} spacing={2}>
                <StatesSection />
            </Grid>
        </Grid>
    )
}

export default TopSummary