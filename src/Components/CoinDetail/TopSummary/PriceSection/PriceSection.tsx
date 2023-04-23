import React from 'react'

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

// data
import { priceData } from './PricesectionData';

const PriceSection = () => {
    const { detail } = useCoinDetailContext();

    return (
        <div className="flex flex-col align-end h-full gap-3">
            {
                priceData(detail).map((item, index) =>
                    <div className="flex align-center flex-wrap gap-3" key={index * 49}>
                        {item.value}
                    </div>
                )
            }
        </div>
    )
}

export default PriceSection