import React from 'react'

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

const TagSection = () => {
  const { detail } = useCoinDetailContext();

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <div className='mb-2'>
        <span className='light-color mr-2'>
          Tags:
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          detail.categories.map((item, index) =>
            index <= 4 ?
              <div key={index * 6 + 24} className="align-center mr-2 mb-2">
                <span className="pillName">
                  {item}
                </span>
              </div> : null
          )
        }
      </div>
    </div>
  )
}

export default TagSection