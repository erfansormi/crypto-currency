import React from 'react'

// context
import { useCoinDetailContext } from '../../../../pages/coin/[coin_id]';

const TagSection = () => {
  const { detail } = useCoinDetailContext();

  return (
    <div className='d-flex align-center' style={{ justifyContent: "flex-end" }}>
      <div className='mb-2'>
        <span className='text-neutral-4 mr-2'>
          Tags:
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          detail.categories.map((item, index) =>
            index <= 4 ?
              <div key={index * 6 + 24} className="align-center mr-2 mb-2">
                <span className="badge">
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