// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// css
import styles from "./coin.module.css"

// components
import TopSummary from './TopSummary/TopSummary';
import ChartContainer from './MiddleData/CoinChart/ChartContainer';
import SideInfo from './MiddleData/SideInfo/SideInfo';

const CoinDetail = () => {
    return (
        <>
            <div className="root-nodes">
                <article className={`ice-bg flex flex-col ${styles.layout_container}`}>
                    <div className="px-7 flex flex-col gap-y-8">
                        <div className={styles.top_summary_container}>
                            <TopSummary />
                        </div>
                        <Grid container sx={{ padding: "0 0 50px" }} spacing={2}>
                            <Grid xs={12} md={8}>
                                <ChartContainer />
                            </Grid>
                            <Grid xs={12} md={4}>
                                <SideInfo />
                            </Grid>
                        </Grid>
                    </div>
                </article>
            </div>
        </>
    )
}

export default CoinDetail