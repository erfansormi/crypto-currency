import React from 'react'

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

// css
import styles from "./sideInfo.module.css";

// data
import { SideInfoData } from './SideInfoData';

const SideInfo = () => {
  const { detail } = useCoinDetailContext();

  return (
    <div className={`bg-neutral-1 border radius-5 ${styles.container}`}>
      <div className={"p-8 flex-column"}>
        <div className={"mb-8"}>
          <h4 className="normal-color">
            {detail.symbol.toUpperCase()} price statistics
          </h4>
        </div>
        <div className={"flex-column"}>
          {
            SideInfoData(detail).map((item, index) =>
              <div
                key={index * 6 + 26}
                className="border-b-color last-b-b d-flex align-center justify-between mb-3 py-5">
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
            )
          }
        </div>
      </div>
    </div >
  )
}

export default SideInfo;