import React from 'react'
import icon1 from '../../images/Accomandation/LAUNDRY.png'
import icon2 from '../../images/Accomandation/PARKING.png'
import icon3 from '../../images/Accomandation/RESTAURANT.png'
import icon4 from '../../images/Accomandation/WIFI.png'

const IconSecoundRow = () => {
  return (
    <div className="container theSecoundIconRow">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
            <img
                src={icon3}
                className="iconTwo"
                alt="icon"
            />
             <img
                src={icon2}
                className="iconTwo"
                alt="icon"
            />
            <img
                src={icon4}
                className="iconTwo"
                alt="icon"
            />
            <img
                src={icon1}
                className="iconTwo"
                alt="icon"
            />
        </div>
        
      </div>
    </div>
  )
}

export default IconSecoundRow
