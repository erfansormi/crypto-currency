import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

// mui
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// css
import styles from "./coin.module.css"

// redux
import { coinDetailDataFetchRequestFunc } from '../../../Redux/Coins/Detail/coinDetailActions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../Redux/store';
import Loading from '../../Other/Loading';

// components
import TopSummary from './TopSummary/TopSummary';
import CoinChart from './MiddleData/CoinChart/CoinChart';
import SideInfo from './MiddleData/SideInfo/SideInfo';
import Error from '../../Errors/Error/Error';

const CoinDetail = () => {
    let id = useParams();
    const dispatch = useDispatch<any>();
    const detail = useSelector((state: State) => state.coin_detail);

    // title
    window.document.title = `${id.coin_id} detail`

    useEffect(() => {
        dispatch(coinDetailDataFetchRequestFunc(id.coin_id))
    }, [])

    return (
        <>
            <div className="root-nodes">
                <article className={`ice-bg ${styles.layout_container}`}>
                    {detail.loading ?
                        // loading
                        <div style={{ minHeight: "60vh" }}>
                            <Loading loading={detail.loading} />
                        </div> :

                        detail.error ?
                            // error
                            <Error errorMessage={detail.error} /> :

                            // detail data
                            detail.data ?
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