import React from 'react'

// data
import { LinkData } from './LinkSectionData';

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

const LinkSection = () => {
    const { detail } = useCoinDetailContext();

    return (
        <div className="flex flex-wrap gap-2">
            {
                LinkData(detail).map((item, index) =>
                    <div key={index * 6 + 22} className="link-container relative">
                        {item.value}
                    </div>
                )}
        </div>
    )
}

export default LinkSection;