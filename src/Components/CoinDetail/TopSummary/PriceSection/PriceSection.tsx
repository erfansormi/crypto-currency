import React from 'react'

// css
import styles from "../topSummary.module.css"

// redux
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

// data
import { priceData } from './PricesectionData';

const PriceSection = () => {
    const detail = useSelector((state: State) => state.coin_detail.detail)
    const dispatch = useDispatch<any>()

    return (
        <div className={styles.price_section_container}>
            {detail != null && priceData(detail).map((item, index) =>
                <div className={styles.price_value_container} key={index * 49}>
                    {item.value}
                </div>
            )}
        </div>
    )
}

export default PriceSection