import React from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

// data
import { nameHeader, nameFooter } from './NameSectionData';

// css
import styles from "./topSummary.module.css"

const NameSection = () => {
    const detail = useSelector((state: State) => state.coin_detail)
    const dispatch = useDispatch<any>()

    return (
        <div className={styles.name_section_container}>
            <div className={styles.header_name} >
                {nameHeader(detail.data)?.map((item, index) =>
                    <div key={index * 6 + 20}>
                        {item.value}
                    </div>
                )}
            </div>
            <div>

            </div>
        </div>
    )
}

export default NameSection