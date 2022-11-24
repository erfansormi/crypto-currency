import React from 'react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../Redux/store';

const TagSection = () => {
  const detail = useSelector((state: State) => state.coin_detail.detail);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <div style={{ marginBottom: "6px" }}>
        <span className='light-color' style={{ marginRight: 6 }}>
          Tags:
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {detail?.categories.map((item, index) =>
          index <= 4 ?
            <div style={{ marginRight: 6, display: "flex", alignItems: "center", marginBottom: 4 }}>
              <span key={index * 6 + 24} className="pillName">
                {item}
              </span>
            </div> : null
        )}
      </div>
    </div>
  )
}

export default TagSection