import React from 'react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

const TagSection = () => {
  const detail = useSelector((state: State) => state.coin_detail.detail);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <div className='mb-2'>
        <span className='light-color mr-2'>
          Tags:
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {detail?.categories.map((item, index) =>
          index <= 4 ?
            <div key={index * 6 + 24} className="align-center mr-2 mb-2">
              <span className="pillName">
                {item}
              </span>
            </div> : null
        )}
      </div>
    </div>
  )
}

export default TagSection