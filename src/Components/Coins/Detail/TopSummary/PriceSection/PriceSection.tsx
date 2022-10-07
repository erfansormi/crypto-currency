import React from 'react'

// css
import styles from "../topSummary.module.css"

// redux
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../../Redux/store';

// data
import { priceData } from './PricesectionData';

const PriceSection = () => {
    const detail = useSelector((state: State) => state.coin_detail)
    const dispatch = useDispatch<any>()

    return (
        <div className={styles.price_section_container}>
            {detail.data != null && priceData(detail.data).map((item, index) =>
                <div className={styles.price_value_container}>
                    {item.value}
                </div>
            )}
        </div>
    )
}

export default PriceSection