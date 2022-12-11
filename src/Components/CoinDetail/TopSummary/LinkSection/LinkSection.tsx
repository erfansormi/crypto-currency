import React from 'react'

// data
import { LinkData } from './LinkSectionData';

// css
import styles from "../topSummary.module.css"

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

const LinkSection = () => {
    const detail = useSelector((state: State) => state.coin_detail);

    return (
        <div className={`my-3 my-sm-0 ${styles.link_section_container}`}>
            {detail.detail != null ?
                LinkData(detail.detail).map((item, index) =>
                    <div key={index * 6 + 22} className="link-container">
                        {item.value}
                    </div>
                ) : null
            }
        </div>
    )
}

export default LinkSection;