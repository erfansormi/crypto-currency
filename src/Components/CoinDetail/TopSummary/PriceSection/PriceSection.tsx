import React from 'react'

// css
import styles from "../topSummary.module.css"

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

// data
import { priceData } from './PricesectionData';

const PriceSection = () => {
    const { detail } = useCoinDetailContext();

    return (
        <div className={styles.price_section_container}>
            {
                priceData(detail).map((item, index) =>
                    <div className={styles.price_value_container} key={index * 49}>
                        {item.value}
                    </div>
                )
            }
        </div>
    )
}

export default PriceSection