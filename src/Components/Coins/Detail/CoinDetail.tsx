import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// css
import styles from "./coin.module.css"

// redux
import { coinDetailDataFetchRequestFunc, coinChartFetchRequestFunc } from '../../../Redux/Coins/Detail/coinDetailActions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../Redux/store';
import Loading from '../../Other/Loading';

// components
import TopSummary from './TopSummary/TopSummary';
import CoinChart from './CoinChart/CoinChart';

const CoinDetail = () => {
    let id = useParams();
    const dispatch = useDispatch<any>();
    const detail = useSelector((state: State) => state.coin_detail);

    useEffect(() => {
        dispatch(coinDetailDataFetchRequestFunc(id.coin_id))
        dispatch(coinChartFetchRequestFunc(id.coin_id))
    }, [])

    return (
        <>
            <div className="root-nodes">
                <article className={`ice-bg ${styles.layout_container}`}>
                    {detail.loading ?
                        // loading
                        <Loading loading={detail.loading} /> :

                        detail.error ?
                            // error
                            <div>
                                {detail.error}
                            </div> :

                            // detail data
                            <div className={styles.container}>
                                <div className={styles.top_summary_container}>
                                    <TopSummary />
                                </div>
                                <Grid container>
                                    <Grid xs={7}>
                                        <CoinChart data={detail.chart.chart?.prices} />
                                    </Grid>
                                </Grid>
                            </div>
                    }
                </article>
            </div>
        </>
    )
}

export default CoinDetail