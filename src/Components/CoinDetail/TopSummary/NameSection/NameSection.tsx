import React from 'react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

// data
import { nameHeader, nameFooter } from './NameSectionData';

// css
import styles from "../topSummary.module.css"

const NameSection = () => {
    const detail = useSelector((state: State) => state.coin_detail.detail);

    return (
        <div className={"mt-9"}>
            <div className={`d-flex align-center ${styles.header_name}`} >
                {nameHeader(detail)?.map((item, index) =>
                    <div key={index * 6 + 20}>
                        {item.value}
                    </div>
                )}
            </div>
            <div className={`d-flex align-center ${styles.header_name}`}>
                {nameFooter(detail)?.map((item, index) =>
                    <div key={index * 6 + 21}>
                        {item.value}
                    </div>
                )}
            </div>
        </div>
    )
}

export default NameSection