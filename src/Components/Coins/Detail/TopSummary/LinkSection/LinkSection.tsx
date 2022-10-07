import React from 'react'

// data
import { LinkData } from './LinkSectionData';

// css
import styles from "../topSummary.module.css"

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../../Redux/store';

const LinkSection = () => {
    const detail = useSelector((state: State) => state.coin_detail);

    return (
        <div className={styles.link_section_container}>
            {detail.data != null ?
                LinkData(detail.data).map((item, index) =>
                    <div key={index * 6 + 22} className="link-container">
                        {item.value}
                    </div>
                ) : null
            }
        </div>
    )
}

export default LinkSection;