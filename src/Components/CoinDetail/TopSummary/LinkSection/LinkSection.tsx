import React from 'react'

// data
import { LinkData } from './LinkSectionData';

// css
import styles from "../topSummary.module.css"

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

const LinkSection = () => {
    const { detail } = useCoinDetailContext();


    return (
        <div className={`my-3 my-sm-0 ${styles.link_section_container}`}>
            {
                LinkData(detail).map((item, index) =>
                    <div key={index * 6 + 22} className="link-container">
                        {item.value}
                    </div>
                )}
        </div>
    )
}

export default LinkSection;