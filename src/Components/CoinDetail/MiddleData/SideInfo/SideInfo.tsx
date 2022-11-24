import React from 'react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

// css
import styles from "./sideInfo.module.css"

// data
import { SideInfoData } from './SideInfoData';

const SideInfo = () => {
  const detail = useSelector((state: State) => state.coin_detail.detail);

  return (
    <div className={`neutral-1 ${styles.container}`}>
      <div className={styles.layout_container}>
        <div className={styles.title_container}>
          <h4 className="normal-color">
            {detail?.symbol.toUpperCase()} price statistics
          </h4>
        </div>
        <div className={styles.info_container}>
          {detail != null &&
            SideInfoData(detail).map((item, index) =>
              <div key={index * 6 + 26} className="border-b-color last-b-b">
                <div>
                  <span>
                    {item.text}
                  </span>
                </div>
                {item.value &&
                  <div className={`normal-color ${styles.value_container}`}>
                    <span>
                      {item.value}
                    </span>
                  </div>
                }
              </div>
            )}
        </div>
      </div>
    </div >
  )
}

export default SideInfo;