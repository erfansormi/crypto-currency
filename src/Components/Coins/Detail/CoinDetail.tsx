import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

// css
import styles from "./coin.module.css"

// redux
import { coinDetailDataFetchRequestFunc, coinChartFetchRequestFunc } from '../../../Redux/Coins/Detail/coinDetailActions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../Redux/store';
import Loading from '../../Other/Loading';

// components
import TopSummary from './TopSummary/TopSummary';


const CoinDetail = () => {
    let id = useParams();
        
    const dispatch = useDispatch<any>()
    const detail = useSelector((state: State) => state.coin_detail)

    useEffect(() => {
        dispatch(coinDetailDataFetchRequestFunc(id.coin_id))
        dispatch(coinChartFetchRequestFunc(id.coin_id))
    }, [])

    return (
        <div className={styles.container}>
            <article className={styles.layout_container}>
                {detail.loading ?
                    // loading
                    <Loading loading={detail.loading} /> :

                    detail.error ?
                        // error
                        <div>
                            {detail.error}
                        </div> :

                        <div className={styles.top_summary_container}>
                            <TopSummary />
                        </div>
                    // detail data
                }
            </article>
        </div>
    )
}

export default CoinDetail