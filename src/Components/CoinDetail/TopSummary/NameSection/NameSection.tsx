import React from 'react'

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

// data
import { nameHeader, nameFooter } from './NameSectionData';

const NameSection = () => {
    const { detail } = useCoinDetailContext();

    return (
        <div className="sm-mt-9 mt-5 flex flex-col gap-3">
            <div className={`flex align-center gap-3`} >
                {
                    nameHeader(detail).map((item, index) =>
                        <div key={index * 6 + 20} className='flex align-center'>
                            {item.value}
                        </div>
                    )
                }
            </div>
            <div className={`flex align-center gap-3`}>
                {
                    nameFooter(detail).map((item, index) =>
                        <div key={index * 6 + 21} className='flex align-center'>
                            {item.value}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NameSection;