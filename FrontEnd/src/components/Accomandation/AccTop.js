import React from 'react'
import topImg from '../../images/Accomandation/top.jpg'
import checkIn from '../../images/Accomandation/CHECKIN.png'
import checkOut from '../../images/Accomandation/CHECKOUT.png'
import villa from '../../images/Accomandation/VILLA.png'

import './Style.css';
import IconSecoundRow from './iconSecoundRow'

const AccTop = () => {
  return (
    <div className="theImageArea">
        <div>
            <img
                src={topImg}
                className="theTopImg"
                alt="topImage"
            />
        </div>
        <div className="container">
            <div className="row theHeadingArea">
                <div className="col-md-12 text-center theBox">
                    <h1 className="head">ACCOMANDATION</h1>
                    <p className="thePara">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut sed diam
                        nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt ut
                        sed diam nonummy nibh euismod tincidunt ut sed diam nonummy nibh euismod tincidunt
                        ut sed diam nonummy nibh euismod tincidunt ut
                    </p>
                </div>
            </div>
            <div className="row theIconsArea">
                <div className="col-5 d-flex flex-column justify-content-center align-items-end">
                    <img
                        src={checkIn}
                        className="theIcons"
                        alt="checkin"
                    />
                </div>
                <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={checkOut}
                        className="theIcons"
                        alt="checkout"
                    />
                </div>
                <div className="col-5 d-flex flex-column justify-content-center align-items-start">
                    <img
                        src={villa}
                        className="theIcons"
                        alt="villa"
                    />
                </div>
            </div>
            <IconSecoundRow/>
        </div>
    </div>
  )
}

export default AccTop
