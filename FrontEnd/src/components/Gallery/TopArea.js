import React from 'react'
import topImage from '../../images/Gallery/topImage.webp'

const TopArea = () => {
  return (
    <div>
        <div>
            <img
                src={topImage}
                className="theTopImg"
                alt="topImage"
            />
        </div>
    </div>
  )
}

export default TopArea
