import { useRouter } from 'next/router';

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// css
import styles from "./coin.module.css"

// redux
import { useSelector } from 'react-redux';
import { State } from '../../Redux/store';

// components
import TopSummary from './TopSummary/TopSummary';
import CoinChart from './MiddleData/CoinChart/CoinChart';
import SideInfo from './MiddleData/SideInfo/SideInfo';

const CoinDetail = () => {
    const detail = useSelector((state: State) => state.coin_detail);

    return (
        <>
            <div className="root-nodes">
                <article className={`ice-bg ${styles.layout_container}`}>
                    {detail.detail ?
                        <div className={styles.container}>
                            <div className={styles.top_summary_container}>
                                <TopSummary />
                            </div>
                            <Grid container sx={{ padding: "20px 0 50px" }} spacing={2}>
                                <Grid xs={12} md={8}>
                                    <CoinChart />
                                </Grid>
                                <Grid xs={12} md={4}>
                                    <SideInfo />
                                </Grid>
                            </Grid>
                        </div> : null
                    }
                </article>
            </div>
        </>
    )
}

export default CoinDetail