import React from 'react'

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// components
import NameSection from './NameSection/NameSection';
import PriceSection from './PriceSection/PriceSection';
import LinkSection from './LinkSection/LinkSection';
import TagSection from './TagSection/TagSection';
import StatesSection from './StatesSection/StatesSection';

const TopSummary = () => {
    return (
        <Grid container className={"gap-y-6"}>
            <Grid xs={12} container className='gap-y-3'>
                <Grid xs={12} sm={6}>
                    <NameSection />
                </Grid>
                <Grid xs={12} sm={6} className='order-2 sm-order-3'>
                    <LinkSection />
                </Grid>
                <Grid xs={12} sm={6} className="order-3 sm-order-2">
                    <PriceSection />
                </Grid>
                <Grid xs={12} sm={6} className='order-4'>
                    <TagSection />
                </Grid>
            </Grid>
            <Grid xs={12} spacing={2}>
                <StatesSection />
            </Grid>
        </Grid>
    )
}

export default TopSummary