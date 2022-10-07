import React from 'react'

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../../../Redux/store';

const TagSection = () => {
  const detail = useSelector((state: State) => state.coin_detail);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <div>
        <span className='light-color' style={{ marginRight: 6 }}>
          Tags:
        </span>
      </div>
      <div>
        {detail.data?.categories.map((item, index) =>
          <span key={index * 6 + 24} className="pillName" style={{ marginRight: 6 }}>
            {item}
          </span>
        )}
      </div>
    </div>
  )
}

export default TagSection